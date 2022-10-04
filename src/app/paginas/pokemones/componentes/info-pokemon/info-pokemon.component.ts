import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './../../../../modelo/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.scss'],
})
export class InfoPokemonComponent implements OnInit {
  @Input() public url!: string;
  public pokemon!: Pokemon;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<Pokemon>(this.url)
    .subscribe(resultado => {
      this.pokemon = resultado;
    });
  }

}
