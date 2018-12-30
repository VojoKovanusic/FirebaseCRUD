import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async sleep() {
    console.log("Trenutno: " + new Date().toString());
    // Sleep thread for 3 seconds
    await this.delay(3000);
    console.log("Nakon pet sekundi " + new Date().toString());
  }
}

