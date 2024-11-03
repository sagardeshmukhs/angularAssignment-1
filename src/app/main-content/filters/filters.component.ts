import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fooditem } from '../../models/fooditem.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  category: string = 'All';
  @Output() sendCategory = new EventEmitter<string>();
  @Input() cartItems: Fooditem[] = [];
  changeValue() {
    console.log(`category is ${this.category}`);
    this.sendCategory.emit(this.category);
  }
}
