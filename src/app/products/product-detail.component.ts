import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  errorMessage: string = '';
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
   // console.log (this._route.snapshot);
    const id = +this._route.snapshot.paramMap.get('id'); // + for convert string to number
    this.pageTitle += `: ${id}`;

    this.getProduct(id);

  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      (product) => {
        this.product = product;
        // console.log (this.product);
      },
      error => this.errorMessage = <any>error);

  }


  onBack(): void {
    this._router.navigate(['/products']);
  }

}

