
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import { Country, RESTCountry } from '../interfaces/restCountry';
import type { CountryProyect } from '../interfaces/countryProyect.interface';
import { CountryMapper } from '../mapper/country.mapper';
import { Region } from '../interfaces/region';


const API_URL = 'https://api.restcountries.com/countries/v5';
const API_KEY = 'rc_live_02b25cc0179a47e4a81772c33d31a904'


@Injectable({
  providedIn: 'root',
})

export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, CountryProyect[]>();
  private queryCacheCountry = new Map<string, CountryProyect[]>();
  private queryCacheRegion  = new Map<Region, CountryProyect[]>();

  searchByCapital(query: string): Observable<CountryProyect[]> {
    query = query.toLocaleLowerCase();
    if(this.queryCacheCapital.has(query)){
      return of (this.queryCacheCapital.get(query) ?? []);
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${API_KEY}`
    });
    console.log(`llegando al servidor por ${query}`)
    return this.http.get<RESTCountry>(

      //return this.http.get<Country []>(
      `${API_URL}/capitals?q=${encodeURIComponent(query)}`, { headers }
    ).pipe(

      map(restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      tap((countries)=>this.queryCacheCapital.set(query, countries)),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener países con esa capital: ${query}`)
        );
      })
    );

  }

  searchCountry(query: string) {
    query = query.toLocaleLowerCase();

    if(this.queryCacheCountry.has(query)){
      return of (this.queryCacheCountry.get(query) ?? []);
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${API_KEY}`
    });
    console.log(`${API_URL}/names.common?q=${encodeURIComponent(query)}`);
    return this.http.get<RESTCountry>(

      //return this.http.get<Country []>(
      //`${API_URL}/capitals?q=${encodeURIComponent(query)}`, { headers }
      `${API_URL}/names.common?q=${encodeURIComponent(query)}`, { headers }

    ).pipe(

      map(restCountries =>
        CountryMapper.mapRestCountryArrayToCountryArray(restCountries),
        console.log('countries.length:',)),
        tap(countries=>this.queryCacheCountry.set(query, countries)),
        delay(2000),
      //console.log('REST Countries:', restCountries)),

      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener país ${query}`)
        );
      })
    );
  }

  searchCountryByAlphaCode(code: string) {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${API_KEY}`
    });
    console.log(`${API_URL}/codes.alpha_2/${encodeURIComponent(code)}`);
    return this.http.get<RESTCountry>(

      //return this.http.get<Country []>(
      `${API_URL}/codes.alpha_2/${encodeURIComponent(code)}`, { headers })
      .pipe(
        map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
        map((countries) => countries.at(0)),
        catchError((error) => {
          console.log('Error fetching', error);
          return throwError(
            () => new Error(`No se pudo obtener países con esa capita: ${code}`)
          );
        })
      );
  }

  searchByRegion(region: Region): Observable<CountryProyect[]> {


    if(this.queryCacheRegion.has(region)){
      return of (this.queryCacheRegion.get(region) ?? []);
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${API_KEY}`
    });

    console.log(`${API_URL}/region?q=${encodeURIComponent(region)}`, { headers })
    return this.http.get<RESTCountry>(

      //return this.http.get<Country []>(
      `${API_URL}/region?q=${encodeURIComponent(region)}`, { headers }
    ).pipe(

      map(restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      tap((countries)=>this.queryCacheCapital.set(region, countries)),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener region: ${region}`)
        );
      })
    );

  }

}
