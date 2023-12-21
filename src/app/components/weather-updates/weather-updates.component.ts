import {Component} from '@angular/core';
import {selectCountryData} from "../../store/weather.selectors";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-weather-updates',
  templateUrl: './weather-updates.component.html',
  styleUrls: ['./weather-updates.component.scss'],
})
export class WeatherUpdatesComponent{
  countryData$ = this.store.select(selectCountryData);
  constructor(private store: Store) {}
}
