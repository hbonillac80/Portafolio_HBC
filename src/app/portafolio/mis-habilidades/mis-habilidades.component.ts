import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-habilidades',
  templateUrl: './mis-habilidades.component.html',
  styleUrls: ['./mis-habilidades.component.css']
})
export class MisHabilidadesComponent implements OnInit {

    //Defino variables a usar en la vista HTML
    titulo: string;
    manejo: string;
    score1: number;
    score2: number;
    score3: number;
    score4: number;
    score5: number;
    creacion: Date;    

  constructor() { 
    this.titulo = 'WORKFLOW';
    this.manejo = 'knowledge rating: Advanced [4 to 5], Intermediate [3 to 3.9] and Basic[1 to 2.9]';
    this.score1 = 2.3;
    this.score2 = 2.8;
    this.score3 = 3.7;
    this.score4 = 4.2;
    this.score5 = 4.5;
    this.creacion = new Date();   
  }

  ngOnInit(): void {
  }

}
