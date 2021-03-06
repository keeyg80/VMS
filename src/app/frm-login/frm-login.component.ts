import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frm-login',
  templateUrl: './frm-login.component.html',
  styleUrls: ['./frm-login.component.css']
})
export class FrmLoginComponent implements OnInit {

user:User;
  hide = true;
  constructor(private router:Router) { }

  ngOnInit(): void {  
      this.user={
      loginID:null,
      password:null,
      role:null
    }
  }
OnSubmit(loginForm:NgForm){
  console.log(loginForm.value.loginID)
  this.user=loginForm.value
  console.log(this.user)
}

nav()
{
  this.router.navigate(['/register']);
}
}
