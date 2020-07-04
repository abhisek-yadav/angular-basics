import { Component, OnInit, Input } from '@angular/core';
import { ShoppingItem } from './shopping-item/shoppingItem.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingItems: ShoppingItem[] = [
    new ShoppingItem('Tomato', 12.2),
    new ShoppingItem('Potato', 14.2)
  ];

  constructor() { }

  ngOnInit() { }

  onItemAdded(shoppingItem: ShoppingItem) {
    this.shoppingItems.push(shoppingItem);
  }
}
