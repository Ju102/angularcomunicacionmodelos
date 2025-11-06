export class Producto {
    // Las propiedades para que sean accesibles deben ser públicas
    public nombre: string;
    public imagen: string;
    public precio: number;

    // Vamos a crear un constructor con parámetros para que reciba la información de las propiedades directamente
    constructor(name: string, image: string, price: number) {
        this.nombre = name;
        this.imagen = image;
        this.precio = price;
    }
}