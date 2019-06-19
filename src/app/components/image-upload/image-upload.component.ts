import { AfterContentChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit, AfterContentChecked {

  selectedFiles: FileList;
  currentFileUpload: File;

  @Input() imagePath: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  private hasImage = false;
  private oldImage: string;

  constructor(private uploadFileService: UploadFileService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    if (this.imagePath !== undefined) {
      this.hasImage = true;
      this.oldImage = this.imagePath;
    }

    console.log(this.hasImage);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;

    if (this.selectedFiles.item(0).size < 1000000) {
      this.imagePath = this.selectedFiles.item(0).name;
      this.valueChange.emit(this.selectedFiles.item(0).name);
    } else {
      this.selectedFiles = undefined;
      alert('De afbeelding mag niet groter worden dan 1mb');
    }
  }

  removeImage() {
    this.selectedFiles = undefined;
    this.imagePath = undefined;

    this.valueChange.emit(undefined);
  }

  upload() {
    if (this.imagePath !== undefined && this.selectedFiles !== undefined) {
      this.currentFileUpload = this.selectedFiles.item(0);
      this.uploadFileService.pushFileToStorage(this.currentFileUpload).subscribe();

      this.selectedFiles = undefined;
    }
  }

  delete() {
    if (this.hasImage && this.selectedFiles === undefined) {
      this.uploadFileService.deleteFile(this.oldImage).subscribe(event => {
        this.imagePath = undefined;
      });
    }
  }
}
