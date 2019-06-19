import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthorizationService } from './authorization.service';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private apiPath = 'images';

  constructor(private authService: AuthorizationService, private apiService: ApiService) {

  }

  pushFileToStorage(file: File) {

    const uri = this.apiPath + '/post';

    const formData = new FormData();
    formData.append('file', file);

    return this.apiService.postImageFile(uri, formData);

  }

  deleteFile(fileName: string) {
     const uri = this.apiPath + '/delete/' + fileName;

     return this.apiService.deleteImageFile(uri);
  }

}
