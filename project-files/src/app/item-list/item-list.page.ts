import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
  segment = 0;   
   @ViewChild('slides', { static: true }) slider: IonSlides;   
  constructor(private route: Router) { }

  ngOnInit() {
  }


  search() {
    this.route.navigate(['./search']);
  } 
 item_info() {
    this.route.navigate(['./item-info']);
  } 

 async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }    
}
