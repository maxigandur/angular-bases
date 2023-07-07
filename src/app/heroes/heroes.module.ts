import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports:[
    //MODULO IMPORTADO DE ANGULAR/COMMON PARA DARLE FUNCIONALIDAD AL CODIGO CON NGIF - NGFOR - NGSWITCH
    CommonModule
  ]
})
export class HeroesModule {}
