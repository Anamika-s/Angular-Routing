import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1> Shopify </h1>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
