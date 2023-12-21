import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment";
import {catchError} from "rxjs/operators";
import {CountryData} from "../IWeather";


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.ApiKey;
  private cache: { [key: string]: CountryData } = {};

  constructor(private http: HttpClient) {}

  getWeatherRss(countryName: string): Observable<CountryData | null> {
    if (this.cache[countryName]) {
      return of(this.cache[countryName]);
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${this.apiKey}`;

    return this.http.get<CountryData>(apiUrl).pipe(
      catchError(() => {
        // Handle errors if needed
        return of(null);
      })
    );
  }
}
