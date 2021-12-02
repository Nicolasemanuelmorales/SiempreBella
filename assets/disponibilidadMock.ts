import Disponibilidad from "../src/models/Disponibilidad";

const disponibilidadMock: Disponibilidad[] = [
  {
    id: 1,
    Fecha: "20/12",
    Horarios: [
      {
        id: 1,
        desde: "08:00",
        hasta: "12:00",
      },
      {
        id: 2,
        desde: "14:00",
        hasta: "18:00",
      },
    ],
  },
  {
    id: 2,
    Fecha: "21/12",
    Horarios: [
      {
        id: 1,
        desde: "08:00",
        hasta: "12:00",
      },
      {
        id: 2,
        desde: "14:00",
        hasta: "17:00",
      },
    ],
  },
  {
    id: 3,
    Fecha: "23/12",
    Horarios: [
      {
        id: 1,
        desde: "08:00",
        hasta: "11:00",
      },
      {
        id: 2,
        desde: "13:00",
        hasta: "18:00",
      },
    ],
  },
  {
    id: 4,
    Fecha: "23/12",
    Horarios: [
      {
        id: 1,
        desde: "08:00",
        hasta: "11:00",
      },
      {
        id: 2,
        desde: "13:00",
        hasta: "18:00",
      },
    ],
  },
];

export default disponibilidadMock;
