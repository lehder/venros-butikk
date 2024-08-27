import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Product } from '../../models/product.model';
import { RouterLinkWithHref } from '@angular/router';
import { AboutComponent } from '../../../info/pages/about/about.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AboutComponent, RouterLinkWithHref ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  // @Input({required: true}) cart: Product[] = []; 
  // total = signal(0);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  

  toogleSideMenu() { 
  this.hideSideMenu.update(prevState => !prevState);
 }

/*  ngOnChanges(changes: SimpleChanges) {
  const cart = changes['cart'];
  if (cart) {
    this.total.set(this.calcTotal());
  }
 }

 calcTotal() {
  return this.cart.reduce((total, product) => total +  product.price, 0);
 } */

}
