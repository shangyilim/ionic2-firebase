import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';
import { ReminderDetailPage } from '../pages/reminder-detail/reminder-detail';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyATI8qTX2EzDpVQiNwtuiUVxxYYEa_MxNI",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://ionic2workshop-1e9d2.firebaseio.com/",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReminderPage,
    ProgressBarComponent,
    ReminderDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReminderPage,
    ReminderDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
