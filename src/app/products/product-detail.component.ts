import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
   // console.log (this._route.snapshot);
    const id = +this._route.snapshot.paramMap.get('id'); // + for convert string to number
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'aaaa',
      productCode: 'ddd',
      releaseDate: 'adada',
      description: 'dsd',
      price: 19,
      starRating: 3.2,
      imageUrl: 'aaa'
    };
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}

