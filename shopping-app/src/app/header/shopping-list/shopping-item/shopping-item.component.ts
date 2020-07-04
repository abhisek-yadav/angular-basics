import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { ShoppingItem } from './shoppingItem.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  // @Input() shoppingItem: ShoppingItem;
  @Output('onItemCreated') onItemCreated = new EventEmitter<ShoppingItem>();

  // access to DOM and template
  @ViewChild('itemPrice', {static: false})  itemPrice: ElementRef;

  ngOnInit() {
  }

  onItemAdd(itemName: HTMLInputElement ) {
    this.onItemCreated.emit(new ShoppingItem(itemName.value, this.itemPrice.nativeElement.value));
  }
}
