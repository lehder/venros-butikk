import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from './../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        title: 'Pro 2', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=17'
      },
      {
        id: Date.now(),
        title: 'Pro 3', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=12'
      },
      {
        id: Date.now(),
        title: 'Pro 4', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=14'
      },
      {
        id: Date.now(),
        title: 'Pro 5', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=28'
      },
      {
        id: Date.now(),
        title: 'Pro 6', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=11'
      },
      {
        id: Date.now(),
        title: 'Pro 7', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        title: 'Pro 8', 
        price: 100, 
        image: 'https://picsum.photos/640/640?r=10'
      }
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('Estamos en el padre');
    console.log(event);
  }
}
