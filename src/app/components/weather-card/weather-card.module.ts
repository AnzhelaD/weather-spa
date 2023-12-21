import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { WeatherCardComponent } from './weather-card.component';

@NgModule({
  declarations: [WeatherCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [WeatherCardComponent],
})
export class WeatherCardModule {}
