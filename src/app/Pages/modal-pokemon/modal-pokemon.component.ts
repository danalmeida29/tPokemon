import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.scss'],
})
export class ModalPokemonComponent {
  mostrar: boolean = false;

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
