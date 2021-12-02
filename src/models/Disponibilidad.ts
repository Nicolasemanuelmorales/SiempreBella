import Horario from "./Horario";

export default class Disponibilidad {
  id: number;
  Fecha: string;
  Horarios: Horario[];

  constructor(params: Disponibilidad) {
    this.id = params.id;
    this.Fecha = params.Fecha;
    this.Horarios = params.Horarios;
  }
}
