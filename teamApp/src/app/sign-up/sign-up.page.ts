import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private  authService:  AuthService) { }

  ngOnInit() {
  }
  tryRegister(){
    console.log('hiiii');
  }
}
