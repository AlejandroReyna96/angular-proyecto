import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nombre del componente.
  templateUrl: './app.component.html', //HTML.
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  public cTitle: string = 'Contador App'; // ya es public la propiedad sin ponersela.
  public iNumero: number = 10;
  public iBase: number = 5;

  Acumular(_iValor : number) {
    this.iNumero += _iValor;
  }
}
