import { Plato } from "../modelos/Plato";

export const ARREGLO_PLATOS: Array<Plato> = [
  new Plato(1, "Bandeja paisa", "35000", "2", "bandejaPaisa.jpg", "data:image/jpeg;base64,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"),
  new Plato(2, "Mute Santandereano", "31000", "4", "", ""),
  new Plato(3, "Mote de queso", "25000", "5", "", ""),
  new Plato(4, "Mojarra frita", "48000", "3", "", ""),
  new Plato(5, "Camarones al ajillo", "55000", "3", "", ""),
  new Plato(6, "Ajiaco", "28500", "1", "", ""),
];
