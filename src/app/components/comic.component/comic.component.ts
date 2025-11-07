import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Input() index!: number;
  @Output() selectFavorito: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteComic: EventEmitter<any> = new EventEmitter<any>();

  marcarFavorito(): void {
    this.selectFavorito.emit(this.comic);
  }

  eliminarse(): void {
    console.log("Eliminando comic " + this.comic.titulo);
    this.deleteComic.emit(this.index);
  }

}
