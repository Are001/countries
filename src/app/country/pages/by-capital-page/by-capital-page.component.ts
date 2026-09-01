import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { ListComponent } from "../../list/list.component";
import { CountryService } from '../../services/country';
import { CountryProyect } from '../../interfaces/countryProyect.interface';
import { firstValueFrom, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {rxResource} from '@angular/core/rxjs-interop'



@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(()=>this.queryParam);

countryRecurso = rxResource({
  request:()=>({query: this.query()}),
  loader: ({request})=>{
    //console.log(this.countryService.searchByCapital(request.query));
    console.log({query: request.query})
    if (!request.query) return of ([]);
    return this.countryService.searchByCapital(request.query);
  }

})

  //Resource es nuevo en angular, aqui se manejan promesas
  // countryRecurso = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async({ request }) => {
  //     if (!request.query) return [];
  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     )
  //   }
  // })

  // countryRecurso = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {
  //     if (!request.query) return [];
  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     )
  //   }
  // })

  // isLoading = signal(false);
  // //countries = signal<RESTCountry>()
  // isError = signal<string | null>(null)


  // //usando map para las interfaces
  // //countries= signal<Country[]>([])
  // countries = signal<CountryProyect[]>([])
  // //countries = signal<RESTCountry[]>([])

  // onSearch(query: string) {

  //   if (this.isLoading()) return;
  //   this.isLoading.set(false);
  //   this.isError.set(null);


  //   this.countryService.searchByCapital(query).
  //     subscribe({
  //       next: (resp) => {
  //         this.isLoading.set(false);
  //         if(!resp || resp.length===0){
  //           this.countries.set([]);

  //         this.isError.set('No se encontro capital');
  //         }
  //         this.countries.set(resp)
  //         //this.countries = resp.data.objects;
  //         //const c = CountryMapper.mapRestCountryArrayToCountryArray(resp.data.objects)

  //         //console.log(this.countries());
  //         //console.log( resp);

  //       },
  //       error: (err) => {
  //         this.isLoading.set(false);
  //         this.countries.set([]);
  //         console.log('error trae:' + this.isError());
  //         this.isError.set('eerrror');
  //       }
  //     });
  //}

}
