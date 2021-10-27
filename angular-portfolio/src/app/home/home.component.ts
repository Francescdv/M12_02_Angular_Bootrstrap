import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `<h1>Home Component</h1>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

}
