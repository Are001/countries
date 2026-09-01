import { Component, effect, input, output, signal } from '@angular/core';
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
  inputValue = signal<string>('');

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
