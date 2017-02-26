import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the AddReminder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-reminder',
  templateUrl: 'add-reminder.html'
})
export class AddReminderPage {

  reminder: Reminder = new Reminder();
  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire, private loadingCtrl: LoadingController) {
    this.setCharacter('clock.png');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReminderPage');
  }

  setCharacter(image: string) {
    this.reminder.character = "assets/images/" + image;

  }

  createReminder() {
    let reminders = this.af.database.list('/reminders');

    let loading = this.getLoader();
    loading.present();

    if(!this.reminder.date){
      let today = new Date();
      this.reminder.date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
      this.reminder.time = "00:00";
    }

    reminders.push(this.reminder)
      .then((response) => {
        loading.dismiss();
        this.navCtrl.pop(this);
      });

  }

  getLoader() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    return loading;
  }

}
