import { Component, input } from '@angular/core';
import { Country } from '../interfaces/restCountry';
import { CountryProyect } from '../interfaces/countryProyect.interface';


@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 countries = input.required<CountryProyect[]>();
}
