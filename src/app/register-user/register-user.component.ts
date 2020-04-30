import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registeruser } from '../model/registeruser.model'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  registeruser:Registeruser;

  constructor() { }

  ngOnInit(): void {
    this.registeruser={
      regusername:null,
      regEmpID:null,
      regUserEmail:null,
      regloginid:null,
      regpassword:null,
      regconfirmpassword:null,
      regplant:null,
      regrole:null,
      regsite:null,
      regdescription:null
    }    
  }
  OnSubmit(registerForm:NgForm){
    this.registeruser=registerForm.value
    console.log(this.registeruser)
  }
}
