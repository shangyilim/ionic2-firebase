import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddReminderPage } from '../add-reminder/add-reminder';

import { ReminderDetailPage } from '../reminder-detail/reminder-detail';

import { Reminder } from '../../classes/reminder';

import { AngularFire} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  reminderList: Reminder[] = [];

  backgroundColors: string[] = ["#96D096", "#61C8B4", "#D8D685", "#F1B96A"];

  constructor(public navCtrl: NavController, private af: AngularFire) {
    this.loadReminders();
  }

  navigateToReminder() {
    this.navCtrl.push(AddReminderPage);
  }

  navigateToReminderDetail(reminder: Reminder){
    this.navCtrl.push(ReminderDetailPage, reminder);
  }


  loadReminders() {
    this.af.database.list('/reminders').subscribe(result=> {

      this.reminderList = result.map(r=> {
        let reminder = Object.assign(new Reminder(), r);
        reminder.key = r.$key;
        return reminder;

      });
    })
  }


}
