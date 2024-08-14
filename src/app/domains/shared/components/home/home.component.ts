import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
cart(): import("../../models/product.model").Product[] {
throw new Error('Method not implemented.');
}

}
