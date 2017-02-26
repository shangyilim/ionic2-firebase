import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';
import { AngularFire } from 'angularfire2';
/*
  Generated class for the ReminderDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reminder-detail',
  templateUrl: 'reminder-detail.html'
})
export class ReminderDetailPage {

  reminder: Reminder;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) {
    this.reminder = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderDetailPage');
  }

  getTodayDate(){
    let today = new Date();
    
    return  today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
  }

  deleteReminder(){
    let reminderList = this.af.database.list('/reminders');
    reminderList.remove(this.reminder.key);

    this.navCtrl.popToRoot();
  }

}
