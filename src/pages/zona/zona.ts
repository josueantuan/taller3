import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-zona',
  templateUrl: 'zona.html',
})
export class ZonaPage {
  public lat:number;
  public lng:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }

  ngAfterViewInit(){
    this.geolocal();
  }
  geolocal(){
    this.geolocation.getCurrentPosition().then((geoposition:Geoposition)=>{
      
      this.lat=geoposition.coords.latitude;
      this.lng=geoposition.coords.longitude;
      console.log(this.lat,this.lng);
    }) 
  }

}
