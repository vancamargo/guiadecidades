import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    background = [
    'assets/imgs/backgrounds/background-01.jpg',
    'assets/imgs/backgrounds/background-02.jpg',
    'assets/imgs/backgrounds/background-03.jpg',
    'assets/imgs/backgrounds/background-04.jpg'
    ]

  signupForm: any;
  constructor(public formBuilder: FormBuilder, public validators: Validators, public navCtrl: NavController, public navParams: NavParams) {
      this.signupForm = formBuilder.group({
        email:['', Validators.required],
        password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20)])],
        passwordConfirmation:['', Validators.compose([Validators.minLength(6), Validators.maxLength(20)])],
        firstName: ['', Validators.required],
        lastName:['', Validators.required]

      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
