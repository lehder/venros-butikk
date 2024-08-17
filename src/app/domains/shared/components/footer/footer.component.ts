import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
