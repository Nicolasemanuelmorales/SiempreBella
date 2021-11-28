export default class Servicio {
  id: number;
  categoria: string;
  nombre: string;
  precio: string;
  descanso: string;
  tiempo: string;

  constructor(params: Servicio) {
    this.id = params.id;
    this.categoria = params.categoria;
    this.nombre = params.nombre;
    this.precio = params.precio;
    this.descanso = params.descanso;
    this.precio = params.precio;
  }
}
