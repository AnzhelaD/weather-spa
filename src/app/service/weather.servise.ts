import { Injectable } from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://rss.accuweather.com/rss/liveweather_rss.asp?locCode=';

  constructor(private http: HttpClient) {}

  getWeatherRss(countryName: string): Observable<any> {
    const url = `${this.apiUrl}${countryName}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
