import { Component, signal } from '@angular/core';
import { SearchInputComponent } from "../../../shared/components/search-input/search-input.component";
import { ListComponent } from "../../list/list.component";
import { Country, RESTCountry } from '../../interfaces/restCountry';
import { KeyValuePipe } from '@angular/common';


@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, KeyValuePipe],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  countries: Country[] = []
  numeros = signal([3, 2, 8, 1, 5, 1]);

  ordenar(numeros: number[]): void {

    numeros.sort((a, b) => a - b);
    console.log(numeros);
  }

  ordenarDos() {
    console.log('hola');
  }

  count = signal('Karina');
  incremnet() {
    this.count.set('sergio');

  }

  usuario = signal({
    nombre: 'Karen',
    edad: 20,
    preparacion: 'Universidad'
  });



  cambiar() {
    this.usuario.update(u => ({
      ...u,
      edad: u.edad + 1
    }))
  }

  usuarioDos = signal({
    nombre:'Lili',
    hobbies:['correr', 'leer','escuchar', 'escribir'],
    edad: 20
  })

  enviarUsuarioDos(){
    this.usuarioDos();
  }
}



