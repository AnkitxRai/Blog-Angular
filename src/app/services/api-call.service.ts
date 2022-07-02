import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor() { }

  public baseUrl(){
    return environment.basUrl;
  }

  public url(url: string) {
    return `${this.baseUrl()}/${url}`
  }
}
