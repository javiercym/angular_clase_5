import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora/calculadora.component';
import { PantallaComponent } from './calculadora/pantalla/pantalla.component';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
  { path: 'calculadora', component: PantallaComponent },
  { path: 'contador', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
