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
  
  //Defino un array para cursos que se pintaran mediante el uso de Directiva HTML *ngFor
  cursos:Array<any> = [
    {periodo:'2015-2016',nombre:'Seminario PSP - TSP (Fundamentos y Avanzado)',institucion:'Seonti - Colombia'},
    {periodo:'2015-2015',nombre:'SCRUM Fundamentos',institucion:'IT Service - Colombia'},
    {periodo:'2014-2014',nombre:'Seminario de MS-Project 2010',institucion:'Sestra Consulting - Colombia'},
    {periodo:'2012-2012',nombre:'The Professional Consultant - Advance Management Skills',institucion:'Institute of business consulting - USA'},
    {periodo:'2007-2007',nombre:'Diplomado Herramientas Tecnológicas PeopleNet',institucion:'META4 - España'},
  ];

  //Defino variable para cambiar contenido a través del uso de Directiva HTML ngIf
  cambio:boolean = true;

}
