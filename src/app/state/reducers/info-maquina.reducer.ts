import { createReducer, on } from "@ngrx/store";
import { cargarProductos, pedirProductos } from "../actions/productos.actions";
import { InfoMaquinaState } from "../app.types";

const initialState: InfoMaquinaState = {
  cargando: false,
  productosVendidos: 0,
  totalProductos: 0,
  totalRecaudado: 0
}

export const infoMaquinaReducer = createReducer(
  initialState,
  on( pedirProductos, (state) => {
    return {
      ...state,
      cargando: true
    }
  }),
  on(cargarProductos, (state) => {
    return {
      ...state,
      cargando: false
    }
  })
);
