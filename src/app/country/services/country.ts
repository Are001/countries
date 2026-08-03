import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, RESTCountry } from '../interfaces/restCountry';

const API_URL = 'https://api.restcountries.com/countries/v5';
const API_KEY = 'rc_live_02b25cc0179a47e4a81772c33d31a904'


@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);



  searchByCapital(query: string) {
    query = query.toLocaleLowerCase();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${API_KEY}`
    });

    return this.http.get<Country[]>(
      `${API_URL}/capitals?q=${encodeURIComponent(query)}`, { headers }
    );

  }


}
