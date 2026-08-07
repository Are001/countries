import { Component, input } from '@angular/core';
import { Country } from '../interfaces/restCountry';
import { CountryProyect } from '../interfaces/countryProyect.interface';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 countries = input.required<CountryProyect[]>();
}
