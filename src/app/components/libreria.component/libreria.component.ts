import { Component, ElementRef, ViewChild } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
})
export class LibreriaComponent {
  public comics: Array<Comic>;
  public favComic!: Comic;

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

  constructor() {
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://images.cdn1.buscalibre.com/fit-in/360x360/27/2a/272a5fe9f6c5c5eceea01dec63bc2ebd.jpg",
        "Yo soy Groot"
      ),
      new Comic(
        "Avengers",
        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        "Los Vengadores"
      ),
      new Comic(
        "Spawn",
        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        "Todd MacFarlane"
      )
    ];
  }
}
