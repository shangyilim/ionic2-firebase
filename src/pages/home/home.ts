import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddReminderPage } from '../add-reminder/add-reminder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  navigateToReminder(){
    this.navCtrl.push(AddReminderPage);
  }

}
