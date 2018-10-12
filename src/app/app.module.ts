import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ZonaPage } from '../pages/zona/zona';
import { DirrecionPage } from '../pages/dirrecion/dirrecion';
import { CoordenadasPage } from '../pages/coordenadas/coordenadas';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmDirectionModule } from 'agm-direction'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ZonaPage,
    DirrecionPage,
    CoordenadasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'
    }),
    AgmDirectionModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ZonaPage,
    DirrecionPage,
    CoordenadasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
