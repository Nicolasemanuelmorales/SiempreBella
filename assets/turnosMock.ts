import Turno from "../src/models/Turno";
import Usuario from "../src/models/Usuario";

const turno: Turno[] = [
  {
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
  },
  {
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
        nombre: "Brazos",
        precio: "200",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Glúteo",
        precio: "200",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Limpieza de cutis",
        precio: "200",
        descanso: "15",
        tiempo: "20",
      },
    ],
    hora: "12:30",
    fecha: "25-08-2021",
    metodoPago: "Mercado Pago",
    estado: "Cancelado",
  },
  {
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
        nombre: "Cavado profundo",
        precio: "350",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Pecho",
        precio: "300",
        descanso: "15",
        tiempo: "10",
      },
    ],
    hora: "12:30",
    fecha: "25-08-2021",
    metodoPago: "Mercado Pago",
    estado: "Cancelado",
  },
  {
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
        precio: "250",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Tira",
        precio: "200",
        descanso: "15",
        tiempo: "10",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Cavado",
        precio: "300",
        descanso: "15",
        tiempo: "10",
      },
    ],
    hora: "12:30",
    fecha: "25-08-2021",
    metodoPago: "Mercado Pago",
    estado: "Cancelado",
  },
];

export default turno;
