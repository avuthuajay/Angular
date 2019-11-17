import { Component} from '@angular/core';

@Component({
    selector: 'ajay-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;

    products: any[] = [
        {
            productId: 1,
            productName: 'Bag',
            productCode: 'BG-001',
            releaseDate: 'March 18, 2019',
            description: '15 kg holding capacity',
            price: 1299.99,
            starRating: 4.2,
            imageUrl: 'assets/images/garden_cart.png'
        },
        {
            productId: 2,
            productName: 'Book',
            productCode: 'BK-001',
            releaseDate: 'March 20, 2019',
            description: 'Childer bed time stories',
            price: 129.99,
            starRating: 4.5,
            imageUrl: 'assets/images/hammer.png'
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
