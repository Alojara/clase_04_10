import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  public nombre: string = '';
  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRouter.params
    .subscribe( parametros => {
      this.nombre = parametros.nombrePokemon;
    });
  }

}
