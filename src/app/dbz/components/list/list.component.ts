import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  //Recibimos informacion con INPUT desde el Componente padre MAIN PAGE, Recibimos la lista de personajes y aqui la tenemos vacia, por ende la iteramos en nuestro list.component.html y estaria vacia si no recibiriamos con el input los valores de la main Page
  public characterList: Character[] = []

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter()


  onDeleteCharacter(id: string):void {

    this.onDeleteId.emit(id)
  }

}
