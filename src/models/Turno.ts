import Servicio from "./Servicio";
import Usuario from "./Usuario";

export default class Turno {
  id: number;
  usuario: Usuario;
  servicios: Servicio[];
  hora: string;
  fecha: string;
  metodoPago: string;
  estado: "Finalizado" | "Cancelado" | "Pendiente";

  constructor(params: Turno) {
    this.id = params.id;
    this.usuario = params.usuario;
    this.servicios = params.servicios;
    this.hora = params.hora;
    this.fecha = params.fecha;
    this.metodoPago = params.metodoPago;
    this.estado = params.estado;
  }
}
