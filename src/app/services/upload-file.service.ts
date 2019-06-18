import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthorizationService} from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private authService: AuthorizationService, private apiService: ApiService) {

  }

  pushFileToStorage(file: File, entity: string, entityId: number) {

    const uri = 'images/post/' + entity + '/' + entityId;

    const formData = new FormData();
    formData.append('file', file);

    return this.apiService.postImageFile(uri, formData);

  }

  getFiles() {
    const uri = 'images';
    return this.apiService.get(uri);
  }

  getFile(id: number){
    const uri = 'images';
    return this.apiService.getFile(uri, id);
  }

}
