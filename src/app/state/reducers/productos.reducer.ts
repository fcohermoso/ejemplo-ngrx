import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { cargarProductos, sacarProducto } from "../actions/productos.actions";
import { Producto, ProductosState } from "../app.types";

const initialState: ProductosState = {
  productos: []
}

export const productosReducer = createReducer(
  initialState,
  on(cargarProductos, (_state, action) => {
    return {
      productos: action.productos
    }
  }),
  on(sacarProducto, (state, action) => {
    const productosActualizados = state.productos.map((p: Producto) => {
      if(p.codigo === action.producto.codigo) {
        return {
          ...p,
          stock: p.stock - 1
        }
      } else {
        return p;
      }
    })
    return {
      productos: productosActualizados
    }
  })
);
