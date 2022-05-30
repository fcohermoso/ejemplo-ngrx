import { createAction, props } from "@ngrx/store";
import { Producto } from "../app.types";
import * as ActionTypes from './action.types'

export const cargarProductos = createAction(
  ActionTypes.CARGAR_PRODUCTOS,
  props<{ productos: Producto[] }>()
);

export const comprobarSacarProductos = createAction(
  ActionTypes.COMPROBAR_SACAR_PRODUCTO,
  props<{ codigo: number }>()
);

export const pedirProductos = createAction(
  ActionTypes.PEDIR_PRODUCTOS
);

export const sacarProducto = createAction(
  ActionTypes.SACAR_PRODUCTO,
  props<{ producto: Producto }>()
);
