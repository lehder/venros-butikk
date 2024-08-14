import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: '<router-outlet/>',
})
export class AppComponent implements OnInit {
  title = 'venros-butikk';


  ngOnInit(): void {
    initFlowbite();
  }
}
