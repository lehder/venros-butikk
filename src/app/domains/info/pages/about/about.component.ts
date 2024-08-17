import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { ListComponent } from '../../../products/pages/list/list.component';

import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { RouterLinkWithHref } from '@angular/router';
import { HomeComponent } from '../../../shared/components/home/home.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, HeaderComponent, ListComponent, RouterLinkWithHref, HomeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
cart(): import("../../../shared/models/product.model").Product[] {
throw new Error('Method not implemented.');
}
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value)
  }

}
