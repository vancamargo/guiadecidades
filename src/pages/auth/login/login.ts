import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators} from "@angular/forms";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  background = [
    'assets/imgs/backgrounds/background-01.jpg',
    'assets/imgs/backgrounds/background-02.jpg',
    'assets/imgs/backgrounds/background-03.jpg',
    'assets/imgs/backgrounds/background-04.jpg'
    ]

  public loginForm: any;
  constructor(public formBuilder: FormBuilder,public nav: NavController, public navParams: NavParams) {
    this.loginForm = formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.minLength(20), Validators.required])]

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToSignup(){
    this.nav.push('SignupPage');
  }

}
