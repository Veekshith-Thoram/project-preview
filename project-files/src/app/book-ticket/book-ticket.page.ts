import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonSlides, IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { format, parseISO } from 'date-fns'


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.page.html',
  styleUrls: ['./book-ticket.page.scss'],
})
export class BookTicketPage implements OnInit {
  modes = ['date'];
  segment = 0;
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
  formattedStringTwo = '';
  @ViewChild('slides', { static: true }) slider: IonSlides;
  @ViewChild(IonDatetime) datetime: IonDatetime;

  constructor(private navCtrl: NavController, private route: Router) {
    this.setToday();
    this.setTomorrow();
  }

  ngOnInit() {
  }
  paymentsuccessful() {
    this.navCtrl.navigateRoot(['./paymentsuccessful']);
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'd MMM' );
  }
  setTomorrow() {
    this.formattedStringTwo = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'd MMM' );
  }

  dateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'd MMM'); 
  }
  
  dateChangedTwo(value) {
    this.dateValue = value;
    this.formattedStringTwo = format(parseISO(value), 'd MMM'); 
  }

  confirm() {
    this.datetime.confirm(true);
  }
  reset() {
    this.datetime.cancel(true); 
  } 
}
