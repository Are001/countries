import { Component, inject, signal } from '@angular/core';
import { ListComponent } from "../../list/list.component";
import { Country, RESTCountry } from '../../interfaces/restCountry';
import { CountryService } from '../../services/country';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { SubRegionComponent } from "./sub-region/sub-region.component";
import { Region } from '../../interfaces/region';


@Component({
  selector: 'app-by-region-page',
  //imports: [ListComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
  imports: [ ListComponent]
})
export class ByRegionPageComponent {


  public regions: Region[]=[
    'Africa',
    'America',
    'Asia',
    'Europa',
    'Oceania',
    'Antartida'
  ];

  selRegion = signal<Region|null>(null);



  //countries : Country[]=[]
  CountryService = inject(CountryService)


  countryRecRegion = rxResource({
    request:()=>({region:this.selRegion()}),
    loader:({request})=>{
      console.log(request);
      if(!request.region) return of([]);
      return this.CountryService.searchByRegion(request.region)
    }
  })
}
