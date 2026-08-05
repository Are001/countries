import { Component, input } from '@angular/core';
import { Country, RESTCountry } from '../interfaces/restCountry';


@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 countries = input.required<RESTCountry[] | null>();
}
