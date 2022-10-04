import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ResultadoPeticion, Info } from 'src/app/modelo/resultado-peticion';


@Injectable()
export class ObtenerPokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  public resultado!: ResultadoPeticion;
  public informaciones: Array<Info> = [];

  constructor(
    private client: HttpClient
  ) {

  }

  //metodo
  public obtener20Primeros(){
    this.client.get<ResultadoPeticion>(this.url)
    .subscribe(peticion => {
      this.resultado = peticion;
      this.informaciones.push(...peticion.results);// ... es destructuracion
    });                           //normalmente deberian entrar individualmente cada resultado
  }                               // por eso se desestructura
  //metodo para obtener los siguientes 20 (del 20 al 40; 40 al 60; etc)
  public obtenerMasPokemones(){

    return this.client.get<ResultadoPeticion>(this.resultado.next)
    .subscribe(peticion =>{
      this.resultado = peticion;
      this.informaciones.push(...peticion.results);
    })
  }

}
