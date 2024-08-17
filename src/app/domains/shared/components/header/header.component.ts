import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { RouterLinkWithHref } from '@angular/router';
import { AboutComponent } from '../../../info/pages/about/about.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AboutComponent, RouterLinkWithHref ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = []; 
  

  toogleSideMenu() { 
  this.hideSideMenu.update(prevState => !prevState);
 }

}
