import Turno from "../src/models/Turno";
import Usuario from "../src/models/Usuario";

const turno: Turno[] = [
  {
    id: 1,
    usuario: new Usuario({ id: 1, password: "pass", correo: "correo" }),
    servicios: [
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Pelvis completa",
        precio: "400",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Tira",
        precio: "200",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Cavado",
        precio: "200",
        descanso: "15",
        tiempo: "20",
      },
    ],
    hora: "12:30 AM",
    fecha: "25-08-2021",
    metodoPago: "Mercado Pago",
  },
  {
    id: 1,
    usuario: new Usuario({ id: 1, password: "pass", correo: "correo" }),
    servicios: [
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Pelvis completa",
        precio: "200",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Tira",
        precio: "200",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Cavado",
        precio: "200",
        descanso: "15",
        tiempo: "20",
      },
    ],
    hora: "12:30 AM",
    fecha: "25-08-2021",
    metodoPago: "Mercado Pago",
  },
  {
    id: 1,
    usuario: new Usuario({ id: 1, password: "pass", correo: "correo" }),
    servicios: [
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Pelvis completa",
        precio: "350",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Tira",
        precio: "300",
        descanso: "15",
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Cavado",
        precio: "400",
        descanso: "15",
        tiempo: "20",
      },
    ],
    hora: "12:30 AM",
    fecha: "25-08-2021",
    metodoPago: "Mercado Pago",
  },
  {
    id: 1,
    usuario: new Usuario({ id: 1, password: "pass", correo: "correo" }),
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
        tiempo: "20",
      },
      {
        id: 1,
        categoria: "Depilacion",
        nombre: "Cavado",
        precio: "300",
        descanso: "15",
        tiempo: "20",
      },
    ],
    hora: "12:30 AM",
    fecha: "25-08-2021",
    metodoPago: "Mercado Pago",
  },
];

export default turno;
