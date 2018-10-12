import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-dirrecion',
  templateUrl: 'dirrecion.html',
})
export class DirrecionPage {
  public origin: any;
  public destination: any;
  public lat:number;
  public lng:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }
  ngOnInit() {
    this.getDirection()
  }
  
  getDirection() {
    this.origin = { lat: -0.1786167, lng: -78.4808664}
    this.destination = { 
      lat: -0.163249, 
      lng: -78.497437 
    }
   
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
