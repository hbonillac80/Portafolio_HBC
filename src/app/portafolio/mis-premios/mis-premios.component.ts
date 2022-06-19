import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mis-premios',
  templateUrl: './mis-premios.component.html',
  styleUrls: ['./mis-premios.component.css']
})
export class MisPremiosComponent implements OnInit {

  //Defino variable Input a usar
  @Input() inicio: string = 'Mi cadena de introduccion de mis logros';

  //Defino variable Output a usar
  @Output() salidaAgradece: EventEmitter<string> = new EventEmitter <string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviaCambioGracias(){
    this.salidaAgradece.emit('Thanks for checking out my portfolio. I am very motivated to offer my expertise and I believe that my technical training, ability to lead teams and knowledge of the sector can fit with your work style and help you achieve your goals. Sincerely, Hugo Bonilla C. +57 3166344862 - hbonillac@hotmail.com');
  }

}
