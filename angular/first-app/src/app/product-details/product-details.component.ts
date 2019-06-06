import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.product = products[+params.get('id')];
    })
  }

}
