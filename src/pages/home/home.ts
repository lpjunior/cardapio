import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username:string;
  public password:string;

  constructor(public navCtrl: NavController) {

  }

  showValues() {
    alert("Username: " + this.username + "\nPassword: " + this.password);
  }
}
