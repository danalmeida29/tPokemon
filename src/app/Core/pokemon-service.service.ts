import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './api';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  constructor(private http: HttpClient) {}

  pokemons: any;
  detailspokemon: any;
  IdPokemon: any;
  erro: any;

  /**
   * Lista de todos os pokemons
   * @returns
   */
  carregarPokemons() {
    return this.getPokemons(BASE_URL).subscribe(
      (res: any) => {
        this.pokemons = res;
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  getPokemons(urlString: string) {
    return this.http.get(urlString);
  }

  /**
   * Carregar pokemon especifico
   * @param 
   * @returns resultado do pokemon selecionado
   */
  getIdPokemon(urlString: string) {
    return this.http.get(urlString);
  }
}
