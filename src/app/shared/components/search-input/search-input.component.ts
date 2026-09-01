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

  debounceTime = input(1000);
  iValue = input<string>();
   value  = output<string>();
  inputValue = linkedSignal<string>(()=>this.iValue() ??'');

  debounceEffect = effect((onCleanup)=>{
    const value = this.inputValue();
    this.inputValue.set
    const timeout = setTimeout(()=>{
      this.value.emit(value);
    }, this.debounceTime());

    onCleanup(()=>{
      clearTimeout(timeout);
    })
  })
}
