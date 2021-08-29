import { GithubService } from './../../service/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  github: any;
  searchUserName: any

  constructor(private gitSearch:GithubService ) {
    
    
   }
  
   
  
    getSearch(){
     this.gitSearch.updateGithub(this.searchUserName)
     this.gitSearch.getSearch().subscribe(github => {
      console.log(github)
      this.github=github
    })
   }

  ngOnInit(): void {
  }

}
