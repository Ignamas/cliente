import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class SedesService {
  url: string= '';

  constructor(private _http: HttpClient, ) {
    this.url=GLOBAL.url;
   }

 
  getSedes(token?: any, sedeId = null): any {
    console.log(this.url);
    
    if (sedeId == null) {
      return this._http.get(this.url + 'sede/');//, { headers: headers });
    } else {
      return this._http.get(this.url + 'sede/' + sedeId);//, { headers: headers });
    }
  }

  nuevaSede(){
    
  }

}
