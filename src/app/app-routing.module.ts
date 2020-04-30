import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrmLoginComponent } from './frm-login/frm-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';



const routes: Routes = [
  {path:'login',component:FrmLoginComponent},
  {path:'register',component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
