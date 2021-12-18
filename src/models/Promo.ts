import Servicio from "./Servicio";
import Usuario from "./Usuario";

export default class Promo {
  id: number;
  descripcion: string;
  precio: number;
  img: string;

  constructor(params: Promo) {
    this.id = params.id;
    this.descripcion = params.descripcion;
    this.precio = params.precio;
    this.img = params.img;
  }
}
