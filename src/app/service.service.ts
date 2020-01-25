import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
     private http:HttpClient
  ) { }

  creatUser(data){
    return this.http.post('url', data).toPromise();
  }


}
