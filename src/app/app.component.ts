import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkWithHref],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'venros-butikk';


  ngOnInit(): void {
    initFlowbite();
  }
}
