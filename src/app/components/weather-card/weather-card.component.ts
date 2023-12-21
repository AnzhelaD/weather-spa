import {Component, Input} from '@angular/core';
import {CountryData} from "../../IWeather";



@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() countryData: CountryData | any;

  constructor() {}
}
