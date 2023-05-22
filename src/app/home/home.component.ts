import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  role=localStorage.getItem("role");
statusManager:boolean=false;
statusEmployee:boolean=false


ngOnInit(): void {

  if(this.role=="Manager"){
    this.statusManager=true;
  }
  if(this.role=="Employee"){
    this.statusEmployee=true;
  }
}


}