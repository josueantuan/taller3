import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ZonaPage } from '../zona/zona';
import { DirrecionPage } from '../dirrecion/dirrecion';
import { CoordenadasPage } from '../coordenadas/coordenadas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irZona(){
    this.navCtrl.push(ZonaPage);
  }
  irDireccion(){
    this.navCtrl.push(DirrecionPage);
  }
  irCoord(){
    this.navCtrl.push(CoordenadasPage);
  }
}
