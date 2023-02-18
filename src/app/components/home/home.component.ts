import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public route: Router) { }
  Fill() {
    this.route.navigate(["form"]);
  }
  Instructions() {
    this.route.navigate(["guidelines"]);
  }
  Home() {
    this.route.navigate(["home"]);
  }

  ngOnInit(): void {
  }

}
