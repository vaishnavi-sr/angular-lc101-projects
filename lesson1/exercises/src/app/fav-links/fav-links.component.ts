import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  fav1 ='https://www.fandango.com/';
  fav2 = 'https://www.youtube.com/';
  fav3 = 'https://www.w3schools.com/';
  constructor() { }

  ngOnInit() {
  }

}
