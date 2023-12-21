import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';
import {catchError, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import * as WeatherActions from './weather.actions';
import {of} from "rxjs";
import {WeatherService} from "../service/weather.servise";
import {selectUsername} from "./weather.selectors";
import {select, Store} from "@ngrx/store";

@Injectable()
export class WeatherEffects {

  saveUserData$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActions.saveUserData),
    mergeMap(({ username }) => {
      this.router.navigate([username]);
      return [];
    })
  ), { dispatch: false });

  loadCountryData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.selectCountry),
      withLatestFrom(
        this.store.pipe(select(selectUsername))
      ),
      mergeMap(([action, username]) =>
        {
          const path = `${username}/${action.country}`;
          this.router.navigate([path]);
        return  this.weatherService.getWeatherRss(action.country).pipe(
          map((data) =>
            WeatherActions.loadCountryDataSuccess({
              data
            })
          ),
          catchError((error) =>
            of(
              WeatherActions.loadCountryDataFailure({
                error
              })
            )
          )
        )}
      )
    )
  );

  constructor(private actions$: Actions, private router: Router, private weatherService: WeatherService, private store: Store) {}
}
