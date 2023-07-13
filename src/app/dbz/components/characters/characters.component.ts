import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    id: "",
    name: '',
    power: 0
  };


  emitCharacter():void{

     debugger;
    if(this.character.name.length === 0)return;

    this.onNewCharacter.emit(this.character)

    this.character = { name: "", power: 0, id: ""};
  }



}
