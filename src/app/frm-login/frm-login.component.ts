import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model'

@Component({
  selector: 'app-frm-login',
  templateUrl: './frm-login.component.html',
  styleUrls: ['./frm-login.component.css']
})
export class FrmLoginComponent implements OnInit {

user:User;
  
  constructor() { }

  ngOnInit(): void {  
      this.user={
      username:null,
      password:null,
      role:null
    }
  }
OnSubmit(loginForm:NgForm){
  console.log(loginForm.value.username)
  this.user=loginForm.value
  console.log(this.user)
}
}
