import { Capital, Flag, Names } from './../interfaces/restCountry';
import type { CountryProyect } from '../interfaces/countryProyect.interface';
import type { RESTCountry, Country } from '../interfaces/restCountry';
export class CountryMapper {

  //toma un restCountry viene de la api y regresa: country
    static fromRestCountry(country: Country): CountryProyect {
      console.log('objeto recibido:', country)
      const result = {
        capitals: country.capitals.join(','),
        uuid: country.uuid,
        flagUrlSvg: country.flag.url_svg,
        namesCommon: country.names.common,
        population: country.population

      };
      console.log('objeto transformado:', result)
      return result;
    }



  //recibir un arreglo de restCountry regresar un arreglo de nuestro pais-
  static mapRestCountryArrayToCountryArray(
    restCountries: Country[]
  ): CountryProyect[] {
    console.log('Array recibido:', restCountries);
    return restCountries.map(this.fromRestCountry);
  }



}
