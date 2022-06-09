import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:  `
    
    <h1>{{cTitle}}</h1>

    <h3>La base es: <strong>{{iBase}}</strong></h3>

    <button (click)="Acumular(iBase)">{{iBase}}</button>

    <span>{{iNumero}}</span>

    <button (click)="Acumular(-iBase)">-{{iBase}}</button>

    `
})
export class ContadorComponent {
    public cTitle: string = 'Contador App'; // ya es public la propiedad sin ponersela.
    public iNumero: number = 10;
    public iBase: number = 5;
  
    Acumular(_iValor : number) {
      this.iNumero += _iValor;
    }
}