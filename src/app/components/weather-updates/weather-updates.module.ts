import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherUpdatesComponent } from './weather-updates.component';
import {CountryListModule} from "../country-list/country-list.module";
import {WeatherCardModule} from "../weather-card/weather-card.module";

@NgModule({
  declarations: [WeatherUpdatesComponent],
    imports: [CommonModule, CountryListModule, WeatherCardModule],
})
export class WeatherUpdatesModule {}
