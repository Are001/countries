
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, catchError, throwError } from 'rxjs';
import { Country, RESTCountry } from '../interfaces/restCountry';
import type { CountryProyect } from '../interfaces/countryProyect.interface';
import { CountryMapper } from '../mapper/country.mapper';

const API_URL = 'https://api.restcountries.com/countries/v5';
const API_KEY = 'rc_live_02b25cc0179a47e4a81772c33d31a904'


@Injectable({
  providedIn: 'root',
})

export class CountryService {
  private http = inject(HttpClient);


  searchByCapital(query: string): Observable<CountryProyect[]> {
    query = query.toLocaleLowerCase();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${API_KEY}`
    });

    return this.http.get<RESTCountry>(

      //return this.http.get<Country []>(
      `${API_URL}/capitals?q=${encodeURIComponent(query)}`, { headers }
    ).pipe(

      map(restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener países con esa capita: ${query}`)
        );
      })
    );

  }

  searchCountry(query:string){
  //Agregar al commit anterior
    //la busqueda de paises la vamos a subir en la rama de Beto
  }


}
