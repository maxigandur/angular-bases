import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FormsModule } from '@angular/forms';
import { SecondPageComponent } from './pages/second-page/second-page.component';



@NgModule({
  declarations: [
    DbzMainComponent,
    ListComponent,
    CharactersComponent,
    SecondPageComponent
  ],
  exports:[
    DbzMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
