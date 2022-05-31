import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { first, map, switchMap } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';
import * as ActionTypes from '../actions/action.types';
import { cargarProductos, sacarProducto } from '../actions/productos.actions';
import { AppState, Producto } from '../app.types';
import { selectProductoByCodigo } from '../selectors/productos.selector';


@Injectable()
export class MaquinaExpEffects {

  cargarProductos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.PEDIR_PRODUCTOS),
      switchMap(() => this.productosService.getProductos()),
      map((productos: Producto[]) => {
        return cargarProductos({ productos });
      }),
    )
  });

  comprobarSacarProducto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.COMPROBAR_SACAR_PRODUCTO),
      switchMap((action: any) => {
        return this.store.select(selectProductoByCodigo(action.codigo))
          .pipe(first());
      }),
      map(({ producto }) => {
        if(producto && producto.stock > 0) {
          return sacarProducto({producto})
        }
        return { type: 'EMPTY' }
      })
    )
  });

  constructor(
    private store: Store<AppState>,
    private productosService: ProductosService,
    private actions$: Actions
  ) { }

}
