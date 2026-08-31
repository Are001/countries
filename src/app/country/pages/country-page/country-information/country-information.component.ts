import { Component, computed, input } from '@angular/core';
import { CountryProyect } from '../../../interfaces/countryProyect.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
  styleUrl: './country-information.component.css'
})
export class CountryInformationComponent {
 country = input.required<CountryProyect>();

 //señal computada, las señales computas se crear apartir de otra
 currentYear = computed(()=>{
  return new Date().getFullYear()
 })
}
