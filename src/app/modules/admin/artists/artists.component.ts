import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
