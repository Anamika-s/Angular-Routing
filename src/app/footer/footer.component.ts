import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<h3> copyright @2022 </h3> `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
