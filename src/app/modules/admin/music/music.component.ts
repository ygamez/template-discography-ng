import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
page: any;
idAdmin: any;
focus: any;

  constructor() { }

  ngOnInit(): void {
  }

}
