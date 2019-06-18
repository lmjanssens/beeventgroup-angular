import {Component, Input, OnInit} from '@angular/core';
import {UploadFileService} from "../../services/upload-file.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;

  @Input('anotherEntityId') entityId;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    console.log('Haal op entity id' + this.entityId);
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFile(this.entityId);
    }
  }

}
