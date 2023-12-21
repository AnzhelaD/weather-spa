import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {Country} from "../../IWeather";
import {selectAllCountries} from "../../store/weather.selectors";
import {selectCountry, toggleFavorite} from "../../store/weather.actions";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  countries$ = this.store.select(selectAllCountries);

  constructor(private store: Store) {}

  toggleFavorite(country: Country) {
    this.store.dispatch(toggleFavorite({ country }));
  }
  selectCountry(country: Country) {
    this.store.dispatch(selectCountry({ country: country.name  }));
  }
}
