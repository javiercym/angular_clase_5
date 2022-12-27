import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  contador = 0

  subir() {
    this.contador = this.contador+1;
  }
  reducir() {
    this.contador = this.contador-1;
  }
}
