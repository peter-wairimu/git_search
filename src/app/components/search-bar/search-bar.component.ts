import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public gitSearch!: string;

  constructor() { }
  //https://api.github.com/users/thenveensaggam
  //https://api.github.com/users/thenaveensaggam/repos
  //"https://api.github.com/user",
  public searchUsername(){}

  ngOnInit(): void {
  }

}
