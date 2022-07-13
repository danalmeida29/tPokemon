import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonServiceService } from 'src/app/Core/pokemon-service.service';
import { BASE_URL } from 'src/app/Core/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @ViewChild('filterInput') filterInput!: ElementRef;

  pokemons: any;
  pokemonList!: any[];

  detailsPokemon: any;
  IdPokemon: any;

  erro: any;
  filteredList: any[] = [];


  constructor(private pokemonService: PokemonServiceService, private router: Router,   private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listaPokemon();
    this.detailsPokemon();
  }

  ngAfterViewInit() {
    this.pesquisarPokemons();
  }

  /**
   * Comando para listar todos os Pokemons
   */
  listaPokemon() {
    this.pokemonService.getPokemons(BASE_URL).subscribe((res) => {
      this.pokemons = res;
      this.pokemonList = this.pokemons.results;
      console.log('res: ', res);
      console.log('teste pokemonList: ', this.pokemonList);
      
    });
  }

  pesquisarPokemons() {
    let filterValue = this.filterInput.nativeElement.value;
    this.filteredList = this.pokemonList.filter((pesquisa: any) =>
      pesquisa.name.trim().toLowerCase().includes(filterValue)
    );
    console.log(this.filterInput.nativeElement.value);
  }

  /**
   * Comando para abrir ID do card escolhido
   * @param Id numero do personagem escolhido(number)
   */
  detalhaPokemon(url: string) {    
   this.pokemonService.getIdPokemon(url).subscribe((res)=>{        
    this.detailsPokemon = res;
    localStorage.setItem('pk_name', this.detailsPokemon.name)  
    localStorage.setItem('pk_img', this.detailsPokemon.sprites.front_default)  
    localStorage.setItem('pk_abilities', this.detailsPokemon.abilities[0].ability.name)
    localStorage.setItem('pk_abilities1', this.detailsPokemon.abilities[1].ability.name)
    localStorage.setItem('pk_type', this.detailsPokemon.types[0].type.name)   
    this.IdPokemon = this.detailsPokemon.id;
    console.log(this.detailsPokemon.sprites.front_default);
    this.onNavigateTo('pokemon-detalhe');
   });
  }

  
  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }
  

  //----------------------------- nao é o mais importante-----------------------\\
  /**
   *
   * @returns URL de imagens dos pokemons
   */
  imagemPokemon(spriteUrl:string) {
    // const numeroFormatado = this.leadingZero();
    return spriteUrl;
  }

  // numero() {
  //   for (let i = 1; i <= 10; i++) {
  //     console.log(`função for: ${i}`);
  //   }
  //   // let e: number = 1;
  //   // while (e <= 1) {
  //   //   console.log(`função while: ${e}`);
  //   //   e++;
  //   // }
  // }

  /**
   * Contador de 0
   * @returns
   */
  // leadingZero(str: string | number, size = 3): string {
  //   let s = String(str);

  //   while (s.length < (size || 2)) {
  //     s = '0' + s;
  //   }

  //   return s;
  // }
}
