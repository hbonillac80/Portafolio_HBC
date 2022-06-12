import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-estudios',
  templateUrl: './mis-estudios.component.html',
  styleUrls: ['./mis-estudios.component.css']
})
export class MisEstudiosComponent implements OnInit {

  //Defino mi variable vacia
  public masestudios: string;

  constructor() { 
    this.masestudios = '';
  }  

  ngOnInit(): void {
  }

  //Creo nuevo método para manipular la variable
  muestraEstudios(cadena: string){
    this.masestudios = cadena;
  }

}
