import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 45;

// get es un metodo de la classe, se ven como propiedades, pero realmente es un metodo.(SE USAN COMO PROPIEDADES)
  get capitalizedName ():string{
    return this.name.toUpperCase();
  }

//METODO SE UTILIZA CON () para invocarlo
  getHeroDescription ():string{
    return`${this.name} - ${this.age}`;
  }


  changeName():string{
    return this.name = "spiderman";
  }

  changeAge():number{

    return  this.age = 23;
  }

  resetForm():void{
    this.name = "ironman";
    this.age = 45;
  }

}
