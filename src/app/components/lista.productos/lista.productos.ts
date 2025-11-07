import { Component } from '@angular/core';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.productos.html',
  styleUrls: ['./lista.productos.css'],
})

export class ListaProductos {
  public producto: Producto;
  public productos: Array<Producto>;

  constructor() {
    this.producto = new Producto("Camiseta Selección", "https://img.asmedia.epimg.net/resizer/v2/PEP7SVQLPBFLBCDVTRCPACXXRY.jpg?auth=481e0bea600b84a732f8d18cc77c05ca464e72bab709f1ed4e21b838b39e9e75&width=1920", 100);
    this.productos = [
      this.producto,
      new Producto(
        "Nike Air Jordan",
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg",
        150
      ),
      new Producto(
        "Nike Air Mag",
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg",
        1900
      ),
      new Producto(
        "New Balance 998",
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg",
        140
      ),
      new Producto(
        "J-Hayber Olimpo",
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        60
      ),
      new Producto(
        "Triple S Balenciaga",
        "https://cdn1.jolicloset.com/imgr/full/2024/05/1321192-1/plastico-zapatillas-balenciaga-triple-s-de-poliuretano-blanco-amarillo.jpg",
        650
      ),
      new Producto(
        "Puma RS-X",
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/371570/01/sv01/fnd/PNA/fmt/png",
        110
      ),
      new Producto(
        "Adidas Ultraboost",
        "https://static.ftshp.digital/img/p/8/1/6/6/7/6/816676.jpg",
        180
      )
    ];
  }
}
