import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { PantallaComponent } from './pantalla/pantalla.component';



@NgModule({
  declarations: [
    CalculadoraComponent,
    PantallaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
