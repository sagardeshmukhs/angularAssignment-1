import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fooditem } from '../../models/fooditem.model';

@Component({
  selector: 'app-foodtemplates',
  templateUrl: './foodtemplates.component.html',
  styleUrl: './foodtemplates.component.css',
})
export class FoodtemplatesComponent {
  @Input() filteredItemList: Fooditem[] = [];
  @Output() sendAddToCartItem = new EventEmitter<Fooditem>();
  addToCart(fooditem: Fooditem) {
    this.sendAddToCartItem.emit(fooditem);
  }
}
