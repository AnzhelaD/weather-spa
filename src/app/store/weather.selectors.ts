import { createSelector, createFeatureSelector } from '@ngrx/store';
import { WeatherState } from './weather.reducer';

export const selectWeatherState = createFeatureSelector<WeatherState>('weather');

export const selectUsername = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.username
);
export const selectAllCountries = createSelector(
  selectWeatherState,
  (state) => state.countries
);
export const selectCountryData = createSelector(
  selectWeatherState,
  (state) => state.countryData
);

