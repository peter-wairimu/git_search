import { GithubService } from './../../service/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  github: any;

  constructor(private gitSearch:GithubService ) {
    this.gitSearch.getSearch().subscribe(github => {
      console.log(github)
      this.github=github
    })
   }
  
  public searchUsername(){}

  ngOnInit(): void {
  }

}
