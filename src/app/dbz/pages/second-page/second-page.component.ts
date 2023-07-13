import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {


  constructor(public dbzService: DbzService){



  }

}
