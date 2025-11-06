import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  standalone: false,
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css',
})
export class HijodeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFav: EventEmitter<any> = new EventEmitter();

  // Necesitamos un método para que cada hijo realice click y, a su vez
  // llamamos al parent
  seleccionarFavoritoHijo(): void {
    this.seleccionarFav.emit(this.sport);
  }


}
