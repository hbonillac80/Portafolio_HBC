import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  //Defino mis 4 variables a usar en la vista
  midireccion: string;
  micodigopostal: number;
  mitelefono: string;
  miemail: string

  constructor() { 
    //Asigno valores a mis variables de nivel del constructor
    this.midireccion = 'Kr 4 25-60 P2 Alferez Real';
    this.micodigopostal = 760001;
    this.mitelefono = '(+57) 316-6344862';
    this.miemail = 'hbonillac@hotmail.com';
  }

  ngOnInit(): void {    
  }

}
