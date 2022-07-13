import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './Pages/pokemon-list/pokemon-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonDetalheComponent } from './Pages/pokemon-detalhe/pokemon-detalhe.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonDetalheComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
