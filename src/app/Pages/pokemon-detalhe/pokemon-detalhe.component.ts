import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.scss'],
})
export class PokemonDetalheComponent implements OnInit {
  imagemPokemon: any;
  nomePokemon: any;
  habilidade: any;
  habilidade1: any;
  tipoPkm: any;
  router: any;

  constructor() {}

  ngOnInit(): void {
    console.log(localStorage);
    // if (localStorage != null) {
    //   this.onNavigateTo('');
    // } else {
    // }
    //Se localstorage tal == null, chame onnavigate pra tela principal
    //Se não, carrega tela, atribuindo as variaveis, cada valor do localstorage

    this.imagemPokemon = localStorage.getItem('pk_img');
    this.nomePokemon = localStorage.getItem('pk_name');
    this.tipoPkm = localStorage.getItem('pk_type');
    this.habilidade = localStorage.getItem('pk_abilities');
    this.habilidade1 = localStorage.getItem('pk_abilities1');

    console.log('test: ', this.tipoPkm);
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }
}
