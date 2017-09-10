import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductSingleComponent } from './product-single.component';
import { ProductlistComponent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild ([
      {path: 'products', component: ProductlistComponent},
      {path: 'products/:id', canActivate: [ ProductGuardService ], component: ProductDetailComponent}
    ]),
    SharedModule
  ],
  declarations: [
    ProductlistComponent,
    ProductSingleComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
