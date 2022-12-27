import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora/calculadora.component';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'contador', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
