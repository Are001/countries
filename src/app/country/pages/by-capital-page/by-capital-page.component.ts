import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { ListComponent } from "../../list/list.component";
import { CountryService } from '../../services/country';
import { Country, RESTCountry, Data } from '../../interfaces/restCountry';
import { CountryMapper } from '../../mapper/country.mapper';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading= signal(false);
  isError = signal<string | null>(null)
  //countries = signal<RESTCountry>()

  //countries= signal<Country[]>([])
  countries = signal<RESTCountry[]>([])

  onSearch(query: string) {

    this.countryService.searchByCapital(query).
      subscribe({
        next: (resp) => {
          this.isLoading.set(false);
          this.countries.set(resp)
          //this.countries.set(resp)
          //this.countries = resp.data.objects;
          const c = CountryMapper.mapRestCountryArrayToCountryArray(resp.data.objects)

          //console.log(this.countries());
          //console.log( resp);
          console.log(c);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

}
