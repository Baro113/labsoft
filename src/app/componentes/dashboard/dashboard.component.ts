import { Component, OnInit } from '@angular/core';
import { Database } from '@angular/fire/database';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthService, private database : Database) { }
  nombre : string = ""
  uid : string = ""
  image : string = ""

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem("user")!)
    this.nombre = data[1]
    this.uid = data[2]
    this.image = data[0]
  }

}
