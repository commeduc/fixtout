import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  onIonInfinite($event: Event) {
    //throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit() { }

}
