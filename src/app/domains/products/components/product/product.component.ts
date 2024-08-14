import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Product } from './../../../shared/models/product.model';
import { RouterLinkWithHref } from '@angular/router';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
   
  @Input({required: true}) product!: Product;
  

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    
    this.addToCart.emit(this.product);
  }
}
