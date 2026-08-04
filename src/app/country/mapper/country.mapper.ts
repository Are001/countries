import { Capital, Flag, Names } from './../interfaces/restCountry';
import type { CountryProyect } from '../interfaces/countryProyect.interface';
import  { RESTCountry, Country } from '../interfaces/restCountry';

export class CountryMapper {

  //toma un restCountry viene de la api y regresa: country
    static fromRestCountry(rCountry: RESTCountry): CountryProyect[] {

    //   const result = {
    //     capitals: country.data.objects[0].capitals.join(','),
    //     uuid: country.data.objects[0].uuid,
    //     flagUrlSvg: country.data.objects[0].flag.url_svg,
    //     namesCommon:country.data.objects[0].names.common,
    //     population: country.data.objects[0].population

    //   };
    //   //console.log('objeto transformado:', result)
    //   return result;
    return rCountry.data.objects.map(country => {
      return {
        capitals: country.capitals.map(c=> c.name).join(','),
        uuid :country.uuid,
        flagUrlSvg: country.flag.url_svg,
        namesCommon: country.names.common,
        population: country.population
      };
    });
  }



  //recibir un arreglo de restCountry regresar un arreglo de nuestro pais-
  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): CountryProyect[] {
    console.log('Array recibido:', restCountries);
    return restCountries.flatMap(this.fromRestCountry);
  }



}
