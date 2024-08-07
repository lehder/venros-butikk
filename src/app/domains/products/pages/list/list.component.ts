import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component'
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        title: 'Producto 2', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=17'
      },
      {
        id: Date.now(),
        title: 'Producto 3', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=12'
      },
      {
        id: Date.now(),
        title: 'Producto 4', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=14'
      },
      {
        id: Date.now(),
        title: 'Producto 5', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=28'
      },
      {
        id: Date.now(),
        title: 'Producto 6', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=11'
      },
      {
        id: Date.now(),
        title: 'Producto 7', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        title: 'Proproducto 8', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=10'
      },

      {
        id: Date.now(),
        title: 'Producto 9', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=8'
      },
      {
        id: Date.now(),
        title: 'Producto 10', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=7'
      },
      {
        id: Date.now(),
        title: 'Producto 11', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=6'
      },
      {
        id: Date.now(),
        title: 'Producto 12', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=5'
      },
      {
        id: Date.now(),
        title: 'Producto 13', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=4'
      },
      {
        id: Date.now(),
        title: 'Producto 14', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=3'
      },
      {
        id: Date.now(),
        title: 'Producto 15', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=2'
      },
      {
        id: Date.now(),
        title: 'Proproducto 16', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=1'
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
   this.cart.update(prevState => [...prevState, product]); 
  }
}
