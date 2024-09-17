import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-productpages',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './productpages.component.html',
  styleUrl: './productpages.component.css'
})
export class ProductpagesComponent {
product: any;
cart(): import("../../models/product.model").Product[] {
throw new Error('Method not implemented.');
}
  
  }
