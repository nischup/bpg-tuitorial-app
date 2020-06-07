import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    audiodetail() {
    this.router.navigate(["audio-detail"]);
  }  

}
