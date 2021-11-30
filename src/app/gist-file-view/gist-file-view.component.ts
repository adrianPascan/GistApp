import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GistFile} from '../model/gist-file';
import {GistFileService} from '../service/gist-file.service';

@Component({
  selector: 'app-gist-file-view',
  templateUrl: './gist-file-view.component.html',
  styleUrls: ['./gist-file-view.component.scss']
})
export class GistFileViewComponent implements OnInit {

  id: string;
  files: GistFile[];

  constructor(private gistFileService: GistFileService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.files = history.state.files;
  }

  getFileContent(file: GistFile): string {
    let fileContent = '';
    this.gistFileService.getFileContent(file.raw_url)
      .subscribe(content => fileContent = content);
    return fileContent;
  }

}
