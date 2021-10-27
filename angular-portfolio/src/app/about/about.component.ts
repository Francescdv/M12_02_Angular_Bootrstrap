import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  template: `<h1>About Component</h1>`,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
