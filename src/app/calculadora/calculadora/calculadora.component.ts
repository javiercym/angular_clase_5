import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  pantalla = '0';
  @Output() cambiarNomnbre = new EventEmitter<string>();

  operando1!: number;
  operando2!: number;
  operacion!: string;


  borrarPantalla() {
    this.pantalla = '0';
    this.operando1 = 0;
    this.operando2 = 0;
    this.operacion = '';
  }

  anadirNumero(numero: string) {
    if (this.pantalla === '0') {
      this.pantalla = numero;
      this.cambiarNomnbre.emit(this.pantalla)
    } else {
      this.pantalla += numero;
      this.cambiarNomnbre.emit(this.pantalla)
    }
  }

  anadirPunto() {
    if (this.pantalla.indexOf('.') === -1) {
      this.pantalla += '.';
      this.cambiarNomnbre.emit(this.pantalla)
    }
  }

  operar(operacion: string) {
    this.operando1 = Number(this.pantalla);
    this.operacion = operacion;
    this.pantalla = '0';
    this.cambiarNomnbre.emit(this.pantalla)
  }

  calcular() {
    this.operando2 = Number(this.pantalla);
    let resultado = 0;
    switch (this.operacion) {
      case '+':
        resultado = this.operando1 + this.operando2;
        break;
      case '-':
        resultado = this.operando1 - this.operando2;
        break;
      case '*':
        resultado = this.operando1 * this.operando2;
        break;
      case '/':
        resultado = this.operando1 / this.operando2;
        break;
    }
    this.pantalla = String(resultado);
    
    this.cambiarNomnbre.emit(this.pantalla)
  }

}
