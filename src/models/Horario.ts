export default class Horario {
  id: number;
  desde: string;
  hasta: string;

  constructor(params: Horario) {
    this.id = params.id;
    this.desde = params.desde;
    this.hasta = params.hasta;
  }
}
