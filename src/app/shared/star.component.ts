import { Component, OnChanges } from '@angular/core';

@Component({
    selector: 'ajay-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    rating = 4;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}
