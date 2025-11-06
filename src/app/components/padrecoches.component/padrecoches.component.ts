import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-padrecoches.component',
  standalone: false,
  templateUrl: './padrecoches.component.html',
  styleUrl: './padrecoches.component.css',
})
export class PadrecochesComponent {
  public coches: Array<Coche>;

  constructor() {
    this.coches = [
      new Coche("Toyota", "Corolla", 0, 20, false),
      new Coche("Honda", "Civic", 0, 25, false),
      new Coche("Ford", "Focus", 0, 30, false),
      new Coche("Chevrolet", "Cruze", 0, 15, false),
      new Coche("Nissan", "Sentra", 0, 18, false)
    ];
  }
}
