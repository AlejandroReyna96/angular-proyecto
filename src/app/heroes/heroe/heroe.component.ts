import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    cNombre: string = 'Ironman';
    iEdad: number = 45;

    get nombreCapitalizado(): string {
        return this.cNombre.toUpperCase();
    }

    ObtenerNombre(): string{
        return `${this.cNombre} - ${this.iEdad.toString()}`;
    }

    CambiarNombre(): void {
        this.cNombre = 'Spiderman';
    }

    CambiarEdad(): void {
        this.iEdad = 34;
    }
}