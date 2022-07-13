import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetalheComponent } from './Pages/pokemon-detalhe/pokemon-detalhe.component';
import { PokemonListComponent } from './Pages/pokemon-list/pokemon-list.component';

const routes: Routes = [ {path:'', component: PokemonListComponent},
  {path:'pokemon-detalhe', component: PokemonDetalheComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
