import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  placeholder =input('Buscar');
  value  = output<string>();
  debounceTime = input(300);
  iValue = input<string>();
  inputValue = linkedSignal<string>(()=>this.iValue() ??'');

  debounceEffect = effect((onCleanup)=>{
    const value = this.inputValue();

    const timeout = setTimeout(()=>{
      this.value.emit(value);
    }, this.debounceTime());

    onCleanup(()=>{
      clearTimeout(timeout);
    })
  })
}
