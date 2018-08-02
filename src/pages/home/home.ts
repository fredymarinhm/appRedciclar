import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userDetails: any;


  constructor(public navCtrl: NavController, public menu: MenuController) {
    const data= JSON.parse(localStorage.getItem('user'));
    console.log(data);
    this.userDetails = data.user;
    console.log(this.userDetails);
    debugger
  }
  ionViewWillEnter () { 
    this.menu.enable (true); 
  }
}
