import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
