import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ComicsService } from '../../services/service.comic';

@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
  // Debemos declarar el servicio para poder recuperarlo en el constructor, mediante providers
  // providers: [ComicsService] <-- No es necesario si se importa desde el app-module
})
export class LibreriaComponent implements OnInit {
  public comics!: Array<Comic>;
  public favComic!: Comic;

  constructor(private _service: ComicsService) { }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  @ViewChild("cajatitulo") cajaTitulo!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcion!: ElementRef;

  createComic(): void {
    let titulo = this.cajaTitulo.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let descripcion = this.cajaDescripcion.nativeElement.value;

    let comic = new Comic(titulo, imagen, descripcion);
    this.comics.push(comic);
  }

  selectFav(fav: Comic): void {
    this.favComic = fav;
  }

  deleteComic(index: number): void {
    this.comics.splice(index, 1);
  }
}
