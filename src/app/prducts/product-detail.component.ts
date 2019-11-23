import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Procuct Detail';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
