import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes.component',
  standalone: false,
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css',
})
export class PadredeportesComponent {
  public deportes: Array<string>;
  public mensaje: string;

  // Necesitamos un método que recibirá el event, que va a ser de cualquier tipado(any).
  // Es decir, recibirá el tipado del dato(string, number...)
  seleccionarFavoritoPadre(event: any): void {
    console.log("Comunicando del hijo al padre");
    this.mensaje = "Deporte favorito: " + event;
  }

  constructor() {
    this.deportes = ["Fútbol", "Baloncesto", "Béisbol", "Tenis", "Rugby"];
    this.mensaje = "";
  }
}
