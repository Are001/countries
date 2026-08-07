import { Component, signal } from '@angular/core';
import { ListComponent } from "../../list/list.component";
import { Country, RESTCountry } from '../../interfaces/restCountry';


@Component({
  selector: 'app-by-region-page',
  //imports: [ListComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  countries : Country[]=[]
}
