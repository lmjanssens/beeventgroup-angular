import {Component, Input, OnInit} from '@angular/core';
import {UploadFileService} from "../../services/upload-file.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;

  @Input() entity: string;
  @Input() entityId: number;
  @Input() imagePath: string;

  constructor(private uploadFileService: UploadFileService) { }

  ngOnInit() {
    console.log(this.entityId);
    console.log(this.entity);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.imagePath = this.selectedFiles.item(0).name;
  }

  upload() {

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadFileService.pushFileToStorage(this.currentFileUpload, this.entity, this.entityId).subscribe(event => {
      alert('File is completely uploaded!');
    });

    this.selectedFiles = undefined;

  }

  delete() {
    this.imagePath = undefined;
  }

}
