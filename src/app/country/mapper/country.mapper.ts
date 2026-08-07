import { Capital, Flag, Names } from './../interfaces/restCountry';
import type { CountryProyect } from '../interfaces/countryProyect.interface';
import { RESTCountry, Country } from '../interfaces/restCountry';

export class CountryMapper {

  //toma un restCountry viene de la api y regresa: country
  static fromRestCountry(rCountry: Country): CountryProyect {

    return {
      uuid: rCountry.uuid,
      flagUrlSvg: rCountry.flag.url_svg,
      name: rCountry.names.translations['spa'].common ,
      capitals: rCountry.capitals[0]?.name ?? '',
      population: rCountry.population,
    };
    //   //console.log('objeto transformado:', result)
    //
    // return rCountry.data.objects.map(country => ({
    //      uuid :country.uuid,
    //     flagUrlSvg: country.flag.url_svg,
    //     namesCommon: country.names.common,
    //     capitals: country.capitals.map(c=> c.name).join(","),
    //     population: country.population

    //     }));
    //c=> c.name).join(','),

  }

  //recibir un arreglo de restCountry regresar un arreglo de nuestro pais-
  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry): CountryProyect[] {
    //console.log('Array recibido:', restCountries);
    return restCountries.data.objects.map(this.fromRestCountry);
  }

}








