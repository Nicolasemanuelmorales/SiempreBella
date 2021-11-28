export default class Usuario {
  id: number;
  correo: string;
  password?: string;

  constructor(params: Usuario) {
    this.id = params.id;
    this.correo = params.correo;
    this.password = params.password;
  }
}
