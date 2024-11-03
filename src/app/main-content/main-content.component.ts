import { Component, OnInit } from '@angular/core';
import { Fooditem } from '../models/fooditem.model';
import { FOOD_ITEMS } from '../models/foodData';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent implements OnInit {
  foodItems: Fooditem[] = FOOD_ITEMS;
  filteredItems: Fooditem[] = [];
  cartItems: Fooditem[] = [];
  ngOnInit() {
    this.filteredItems = FOOD_ITEMS;
  }

  categoryFilter(category: string) {
    console.log(`category is - ${category}`);
    this.filteredItems = this.foodItems.filter(
      (item) => item.category === category
    );
    // console.log(this.filteredItems);
  }

  addToCart(fooditem: Fooditem) {
    this.cartItems.push(fooditem);
    console.log(this.cartItems);
  }
}
