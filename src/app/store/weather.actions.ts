import { createAction, props } from '@ngrx/store';
import {Country} from "../IWeather";

export const saveUserData = createAction(
  '[Weather] Save User Data',
  props<{ username: string, email: string }>()
);
export const toggleFavorite = createAction(
  '[Weather] Toggle Favorite Country',
  props<{ country: Country }>()
);
export const selectCountry = createAction(
  '[Weather] Select Country',
  props<{ country: string }>()
);
export const loadCountryDataSuccess = createAction(
  '[Weather] Load Country Data Success',
  props<{ data: any }>()
);

export const loadCountryDataFailure = createAction(
  '[Weather] Load Country Data Failure',
  props<{  error: any }>()
);
