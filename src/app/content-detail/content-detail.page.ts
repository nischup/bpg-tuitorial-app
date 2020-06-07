import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.page.html',
  styleUrls: ['./content-detail.page.scss'],
})
export class ContentDetailPage implements OnInit {

   constructor(private router: Router) { }

  ngOnInit() {
  }



}
