import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//page
import {SignUpPage} from '../sign-up/sign-up';
import {Page1} from '../page1/page1';

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPagePage');
  }

  doSignUp() {
    this.navCtrl.push(SignUpPage);
  }
  
  doLogin() {
    this.navCtrl.setRoot(Page1);
  }

}
