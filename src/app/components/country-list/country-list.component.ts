import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {Country} from "../../IWeather";
import {selectAllCountries} from "../../store/weather.selectors";
import {selectCountry, toggleFavorite} from "../../store/weather.actions";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countries$ = this.store.select(selectAllCountries);

  constructor(private store: Store) {}

  ngOnInit() {
    this.countries$.subscribe(res =>{
      console.log('res', res);
    })
  }

  toggleFavorite(country: Country) {
    this.store.dispatch(toggleFavorite({ country }));
  }
  selectCountry(country: Country) {
    console.log('country');
    this.store.dispatch(selectCountry({ country: country.name  }));
  }
}
