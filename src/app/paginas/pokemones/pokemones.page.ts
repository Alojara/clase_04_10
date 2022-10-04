import { Component, OnInit, ViewChild } from '@angular/core';
import {ObtenerPokemonService} from './servicios/obtener-pokemon.service';
import {IonInfiniteScroll} from '@ionic/angular'

import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) public miInfinito: IonInfiniteScroll

  public formulario: FormGroup;

  constructor(
    public obtenerPokemon: ObtenerPokemonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // validaciones sync // validar dos campos o mas
    // validaciones Async //
    this.formulario = this.formBuilder.group({
      //1er parametro: valor del elemento
      //2do parametro: validaciones sync // validaciones custom
      //3er parametro: validaciones Async (desde internet)
      nombrePokemon: new FormControl('puedeIrVacio',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ])

    });
    this.obtenerPokemon.obtener20Primeros()
  }
  //capturamos el evento
public cargarMasPokemones(event: Event): void{
  this.obtenerPokemon.obtenerMasPokemones();
  this.miInfinito.complete();
  console.log("la pagina esta cargando pokemones")
}
}
