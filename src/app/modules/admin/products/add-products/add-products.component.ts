import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
entityForm: any;
currency: any;
product: any;
categories: any;
taxes: any;
loading: any;
focus1: any;
focus: any;
save(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

}
