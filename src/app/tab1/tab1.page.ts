import { Component } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private router: Router) {}

   videopage() {
    this.router.navigate(["video"]);
  }   

  audio() {
    this.router.navigate(["audio"]);
  }   

  gallery() {
    this.router.navigate(["gallery"]);
  }   

  content() {
    this.router.navigate(["content"]);
  }

}
