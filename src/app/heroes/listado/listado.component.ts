import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  lstHeroes: string[] = ['Spiderman', 'Ironman', 'Gokú', 'Hulk'];
}
