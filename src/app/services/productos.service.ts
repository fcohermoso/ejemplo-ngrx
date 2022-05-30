import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Producto } from '../state/app.types';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProductos(): Observable<Producto[]> {
    return of([
      {
        nombre: 'Perrito piloto',
        precio: 12,
        stock: 4,
        codigo: 18
      },
      {
        nombre: 'Ruperta',
        precio: 20,
        stock: 2,
        codigo: 14
      },
      {
        nombre: 'Pistola bolas',
        precio: 8,
        stock: 8,
        codigo: 23
      },
    ]).pipe(
      delay(1500)
    );
  }
}
