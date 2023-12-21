import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import {Country} from "../IWeather";


export interface WeatherState {
  username: string | null;
  email: string | null;
  countries: Country[];
  favoriteCountries: Country[];

}

export const initialState: WeatherState = {
  username: null,
  email: null,
  countries: [
    { name: 'Poland', favorite: false },
    { name: 'Germany', favorite: false },
    { name: 'Austria', favorite: false },
    { name: 'Belgium', favorite: false },
    { name: 'France', favorite: false },
    { name: 'Italy', favorite: false },
    { name: 'Netherlands', favorite: false },
    { name: 'Spain', favorite: false },
    { name: 'Switzerland', favorite: false },
    { name: 'Sweden', favorite: false },
  ],
  favoriteCountries: []
};

export const WeatherReducer = createReducer(
  initialState,
  on(WeatherActions.saveUserData, (state, { username, email }) => ({ ...state, username, email })),
  on(WeatherActions.toggleFavorite, (state, { country }) => {
    const updatedCountries = addToFirst(country, state.countries);
   console.log('updatedCountries', updatedCountries);
    return {
      ...state,
      countries: updatedCountries
    };
  })
);


function addToFirst(obj:any, countries: any) {
  let modifyCountry= [...countries];
  let modifyObj = {...obj}

  const equality = (element: Country) => JSON.stringify(element) === JSON.stringify(obj);
  const index = modifyCountry.findIndex(equality);

  if(obj.favorite) {
    modifyObj.favorite = false;
    if(modifyCountry[index + 1].favorite === false) {
      modifyCountry[index] = modifyObj;
      return modifyCountry;
    } else {
      modifyCountry.splice(index, 1);
      modifyCountry.push(modifyObj);
    }
  } else {
    modifyCountry.splice(index, 1);
    modifyObj.favorite = true;
    modifyCountry.unshift(modifyObj);
  }

  modifyCountry.filter(function( element: any ) {
    return element !== undefined;
  });
   return modifyCountry;
}
