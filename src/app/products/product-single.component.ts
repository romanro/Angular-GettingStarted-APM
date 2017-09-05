import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-product',
    templateUrl: './product-single.component.html',
    styleUrls: ['./product-single.component.css']
})

export class ProductSingleComponent {
    @Input() product: IProduct;
    @Input() showImage: boolean;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onRatingClicked(msg: string): void {
        this.ratingClicked.emit (msg);
    }

}
