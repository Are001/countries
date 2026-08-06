import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { ListComponent } from "../../list/list.component";
import { CountryService } from '../../services/country';
import { CountryProyect } from '../../interfaces/countryProyect.interface';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null)
  //countries = signal<RESTCountry>()

  //countries= signal<Country[]>([])

  //usando map para las interfaces
  countries = signal<CountryProyect[]>([])
  //countries = signal<RESTCountry[]>([])

  onSearch(query: string) {

    if (this.isLoading()) return;
    this.isLoading.set(false);
    this.isError.set(null);


    this.countryService.searchByCapital(query).
      subscribe({
        next: (resp) => {

          this.countries.set(resp)
          //this.countries = resp.data.objects;
          //const c = CountryMapper.mapRestCountryArrayToCountryArray(resp.data.objects)

          //console.log(this.countries());
          //console.log( resp);
          //console.log(c);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

}
