import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  segment = 0;   
   @ViewChild('slides', { static: true }) slider: IonSlides;   
  constructor(private route: Router) { }

  ngOnInit() {
  }
  item_lists() {
    this.route.navigate(['./item-list']);
  } 
 search() {
    this.route.navigate(['./search']);
  } 

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }  
}
