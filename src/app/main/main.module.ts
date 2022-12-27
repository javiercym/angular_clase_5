import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { IncrementoComponent } from './incremento/incremento.component';
import { DecrementoComponent } from './decremento/decremento.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    CardComponent,
    IncrementoComponent,
    DecrementoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
