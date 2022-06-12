import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-vida-laboral',
  templateUrl: './mi-vida-laboral.component.html',
  styleUrls: ['./mi-vida-laboral.component.css']
})
export class MiVidaLaboralComponent implements OnInit {

  //Defino mis variables vacias
  public introduccion: string;
  public ultimactualizacion: Date;

  constructor() { 
    this.introduccion = '';
    this.ultimactualizacion = new Date();   
  }

  ngOnInit(): void {
    //Relleno las nuevas variables creadas
    this.introduccion='I have more than 15 years of experience in software development as a full stack developer, below I summarize my most important experience:';
    this.ultimactualizacion = new Date();
  }

}
