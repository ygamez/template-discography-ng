import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NumericLiteral } from 'typescript';



@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  page: number = 1;
  idAdmin: number ;

  constructor( ) { 
   }
  
  ngOnInit(): void {
   
  }

}
