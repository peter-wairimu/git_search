// import { environment } from './../../environments/environment.prod';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map"




@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username : string;
  // private clientid = `8db15fc12704ec89c951`
  // private clientsecret = `8ab3ddd834c8fd1762174fe6dc61e91869469810`
  private myApi ='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'

  constructor(private http:HttpClient){
    console.log("Am inlove with you")
    this.username = 'peter-wairimu'
  }
  getSearch(){
    return this.http.get('https://api.github.com/users/' + this.username + "?client_id="  + this.myApi)
    .map((res: any) => {
      return res
  })
  }
  
}





