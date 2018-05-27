import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      console.log('You are 100px from the top to bottom');
    } else if (number > 500) {
        console.log('You are 500px from the top to bottom');
    }

  }

}
