import { Component, inject, effect, signal } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { ListComponent } from "../../list/list.component";
import { Country, RESTCountry } from '../../interfaces/restCountry';
import { CountryService } from '../../services/country';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {


  // countryService = inject(CountryService);
  // query = signal('');
  // countryRecurso = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request }) => {
  //     if (!request.query) return [];
  //     return await firstValueFrom(
  //       this.countryService.searchCountry(request.query)
  //     )

  //   }
  // })
  countryService = inject(CountryService);
  query = signal('');
  countryRecurso = rxResource({
    request: () => ({ query: this.query() }),
    loader:  ({ request }) => {
      if (!request.query) return of([]);
      //return await firstValueFrom(
        console.log(request.query)
        return this.countryService.searchCountry(request.query)
     //)


    }


  });

  // vamos a probar el stash //oculto.
  // countries: Country[] = []

  // numeros = signal([3, 2, 8, 1, 5, 1]);

  // ordenar(numeros: number[]): void {

  //   numeros.sort((a, b) => a - b);
  //   console.log(numeros);
  // }

  // ordenarDos() {
  //   console.log('hola');
  // }

  // count = signal('Karina');
  // incremnet() {
  //   this.count.set('sergio');

  // }

  // usuario = signal({
  //   nombre: 'Karen',
  //   edad: 20,
  //   preparacion: 'Universidad'
  // });



  // cambiar() {
  //   this.usuario.update(u => ({
  //     ...u,
  //     edad: u.edad + 1
  //   }))
  // }

  // usuarioDos = signal({
  //   nombre:'Lili',
  //   hobbies:['correr', 'leer','escuchar', 'escribir'],
  //   edad: 20
  // })

  // enviarUsuarioDos(){
  //   this.usuarioDos();
  // }
}



