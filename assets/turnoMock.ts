import Turno from "../src/models/Turno";
import Usuario from "../src/models/Usuario";

const turno: Turno = {
  id: 1,
  usuario: new Usuario({
    id: 1,
    password: "pass",
    correo: "correo",
    rol: "Cliente",
  }),
  servicios: [
    {
      id: 1,
      categoria: "Depilacion",
      nombre: "Pelvis completa",
      precio: "400",
      descanso: "15",
      tiempo: "20",
    },
  ],
  hora: "12:30",
  fecha: "25-08-2021",
  metodoPago: "Mercado Pago",
  estado: "Cancelado",
};

export default turno;
