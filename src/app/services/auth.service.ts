import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, } from '@firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { Auth } from '@angular/fire/auth';
import { SesionUsersService } from './sesion-users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router, private userAuth: Auth, private localServ: SesionUsersService) { }
  facebookAuth(){
    return this.facebookAuthLogin(new FacebookAuthProvider())
  }

  facebookAuthLogin(provider : any){

    return this.auth.signInWithPopup(provider).then(result =>{
      console.log("Sesion Iniciada con Exito", result)
      this.loginExitoso(result)
    }).catch((error) =>{
      console.log(error)
    })

  }

  twitterAuth(){
    return this.twitterAuthLogin(new TwitterAuthProvider())
  }

  twitterAuthLogin(provider : any){
    return this.auth.signInWithPopup(provider).then(result =>{
      console.log("Sesion Iniciada con Exito", result)
      this.loginExitoso(result)
    }).catch((error) =>{
      console.log(error)
    })
  }

  githubAuth(){
    return this.githubAuthLogin(new GithubAuthProvider())
  }

  githubAuthLogin(provider : any){

    return this.auth.signInWithPopup(provider).then(result =>{
      console.log("Sesion Iniciada con Exito", result)
      this.loginExitoso(result)
    }).catch((error) =>{
      console.log(error)
    })

  }

  registro({mail, password}: any){

    return createUserWithEmailAndPassword( this.userAuth , mail, password);

  }

  login({email, password}: any){

    return signInWithEmailAndPassword( this.userAuth , email, password);

  }

  loginExitoso(data : any){

    console.log("Login con exito: "+"\nUser: "+JSON.stringify( data.user ))
    if (data.user?.mail){

      this.localServ.instanciaEnLocalHost(data.user?.photoURL!, data.user?.email!, data.user.uid!)

    }else{

      this.localServ.instanciaEnLocalHost(data.user?.photoURL!, data.user?.displayName!, data.user.uid!)

    }

    this.router.navigateByUrl("/dashboard")

  }

  //auntenticarse con google
  googleAuth(){
    return this.googleAuthLogin(new GoogleAuthProvider())
  }

  googleAuthLogin(provider: any){

    return this.auth.signInWithPopup(provider).then(result =>{
      console.log("Sesion Iniciada con Exito", result)
      this.loginExitoso(result)
    }).catch((error) =>{
      console.log(error)
    })

  }

  async logOut(){
    this.auth.signOut();
  }
  
  getStateUser(){
    return this.auth.authState;
  }
}
