import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { InforPage } from '../pages/infor/infor';
import { MinePage } from '../pages/mine/mine';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AgreementPage } from '../pages/agreement/agreement';
import { FindpswPage } from '../pages/findpsw/findpsw';
import { SetPage } from '../pages/set/set';
import { PublishPage }  from '../pages/publish/publish';
import { ViewPage } from '../pages/view/view';
import { DetailPage } from '../pages/detail/detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InforPage,
    MinePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    AgreementPage,
    FindpswPage,
    SetPage,
    PublishPage,
    ViewPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InforPage,
    MinePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    AgreementPage,
    FindpswPage,
    SetPage,
    PublishPage,
    ViewPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
