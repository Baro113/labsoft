import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SesionUsersService } from '../../services/sesion-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServ: AuthService, private router: Router, private fb:FormBuilder, private localServ: SesionUsersService) { }

  ngOnInit(): void {
  }

  formularioLogin:FormGroup=this.fb.group({
    mail: [],
    password: []
  })

  signIn(){
    const email = this.formularioLogin.value.mail;
    const password = this.formularioLogin.value.password;
    console.log(email);
    console.log(password);

    this.authServ.login({email, password}).
    then((data)=>
      {this.localServ.instanciaEnLocalHost("https://www.pngmart.com/files/21/Account-User-PNG-Photo.png", data.user?.email!, data.user?.uid!), 
      this.router.navigateByUrl("/dashboard");
    })
  }

  googleAuth(){
  
    this.authServ.googleAuth();
  }

  facebookAuth(){
  
    this.authServ.facebookAuth();
  }

  twitterAuth(){
  
    this.authServ.twitterAuth();
  }

  githubAuth(){
  
    this.authServ.githubAuth();
  }


}
