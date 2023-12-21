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

export const selectFavoriteCountries = createSelector(
  selectWeatherState,
  (state) => state.favoriteCountries
);

export const selectNonFavoriteCountries = createSelector(
  selectWeatherState,
  (state) => state.countries.filter((c) => !c.favorite)
);
