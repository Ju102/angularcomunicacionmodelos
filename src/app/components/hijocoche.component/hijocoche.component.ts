import { Component, Input, OnInit } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css',
})
export class HijococheComponent implements OnInit {

  @Input() car!: Coche;

  public mensaje: string;

  constructor() {
    this.mensaje = "";
  }

  ngOnInit() {
    this.comprobarEstado();
  }

  comprobarEstado(): boolean {
    if (!this.car.estado) {
      this.mensaje = "El coche está apagado";
      return false;
    } else {
      this.mensaje = "El coche está encendido";
      return true;
    }
  }

  cocheOnOff(): void {
    if (this.car.velocidad != 0) {
      alert("¡No puedes apagar el coche mientras está en movimiento!");
    }
    else {
      this.car.estado = !this.car.estado;
      this.comprobarEstado();
    }
  }

  acelerar(): void {
    if (!this.comprobarEstado()) {
      alert("¡No puedes acelerar mientras el coche está apagado!");
    } else {
      this.car.velocidad += this.car.aceleracion;
    }
  }

  frenar(): void {
    if (!this.comprobarEstado()) {
      alert("¡No puedes frenar mientras el coche esta apagado!");
    } else if (this.car.velocidad == 0) {
      alert("¡No puedes frenar si el coche está parado!")
    }
    else {
      this.car.velocidad -= this.car.aceleracion;
    }
  }

}
