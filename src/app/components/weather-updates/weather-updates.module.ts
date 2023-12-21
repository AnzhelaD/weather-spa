import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherUpdatesComponent } from './weather-updates.component';
import {CountryListModule} from "../country-list/country-list.module";

@NgModule({
  declarations: [WeatherUpdatesComponent],
  imports: [CommonModule, CountryListModule],
})
export class WeatherUpdatesModule {}
