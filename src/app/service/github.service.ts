 import { environment } from './../../environments/environment.prod';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map"





@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username : string;
  
  

  constructor(private http:HttpClient){
    this.username = 'peter-wairimu'
  }
   public getSearch(){
    return this.http.get('https://api.github.com/users/' + this.username + "?client_id="  + environment.USER_URL)
    .map((res: any) => {
      return res
  })
  
  
  }
  updateGithub(username:string){
      this.username=username
  }
}