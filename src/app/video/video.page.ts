import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  videodetail() {
    this.router.navigate(["video-detail"]);
  }   

}
