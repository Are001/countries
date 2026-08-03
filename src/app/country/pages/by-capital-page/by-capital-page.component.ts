import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { ListComponent } from "../../list/list.component";
import { CountryService } from '../../services/country';
import { Country, RESTCountry } from '../../interfaces/restCountry';


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
  //countries: Country[] = [];
  countries= signal<Country[]>([])

  onSearch(query: string) {

    this.countryService.searchByCapital(query).
      subscribe({
        next: (resp) => {
          this.isLoading.set(false);
          this.countries.set(resp)
          //this.countries = resp.data.objects;
          console.log(this.countries());
          console.log( resp);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

}
