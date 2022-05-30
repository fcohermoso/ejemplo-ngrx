import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Producto, ProductosState } from '../state/app.types';
import { selectCargando } from '../state/selectors/info-maquina.selector';
import { selectProductos } from '../state/selectors/productos.selector';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];
  cargando: boolean = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectCargando)
      .subscribe((cargando) => this.cargando = cargando);

    this.store.select(selectProductos)
      .subscribe((productos: Producto[]) => this.productos = productos);



  }

}
