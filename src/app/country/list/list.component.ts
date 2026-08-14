import { Component, input } from '@angular/core';
import { Country } from '../interfaces/restCountry';
import { CountryProyect } from '../interfaces/countryProyect.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 countries = input.required<CountryProyect[]>();
}
