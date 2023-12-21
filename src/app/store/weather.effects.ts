import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as WeatherActions from './weather.actions';
import {of} from "rxjs";
import {WeatherService} from "../service/weather.servise";

@Injectable()
export class WeatherEffects {

  saveUserData$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActions.saveUserData),
    mergeMap(({ username, email }) => {
      this.router.navigate([username]);
      return [];
    })
  ), { dispatch: false });

  loadCountryData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.selectCountry),
      mergeMap((action) =>
        this.weatherService.getWeatherRss(action.country).pipe(
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
        )
      )
    )
  );

  constructor(private actions$: Actions, private router: Router, private weatherService: WeatherService) {}
}
