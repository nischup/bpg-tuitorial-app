import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    contentdetail(){
  	this.router.navigate(["content-detail"]);
  }

}
