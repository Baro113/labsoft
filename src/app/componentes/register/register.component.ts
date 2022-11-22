import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authServ: AuthService, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  formularioRegistrar: FormGroup=this.fb.group({
    mail: [],
    password: []
  })
  
  registrar(){
    const mail = this.formularioRegistrar.value.mail;
    const password = this.formularioRegistrar.value.password;
    console.log(mail, password)
    this.authServ.registro({mail, password});
    alert("usuario registrado con exito")
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
