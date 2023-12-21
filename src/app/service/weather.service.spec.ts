import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.servise';
import { environment } from '../environment';
import { CountryData } from '../IWeather';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return country data from API', () => {
    const countryName = 'TestCountry';
    const mockData: CountryData = {
      name: 'TestCountry',
      weather: [{ description: 'Sunny' }],
      main: {
        temp: 25,
        feels_like: 26,
        temp_min: 20,
        temp_max: 30,
        pressure: 1015,
      },
      visibility: 10000,
    };

    service.getWeatherRss(countryName).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(
      `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${environment.ApiKey}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
});
