import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./components/logIn/login.module";
import {FooterModule} from "./components/footer/footer.module";
import {HeaderModule} from "./components/header/header.module";
import {MainModule} from "./components/main/main.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {WeatherReducer} from "./store/weather.reducer";
import {WeatherEffects} from "./store/weather.effects";
import {EffectsModule} from "@ngrx/effects";
import {WeatherUpdatesModule} from "./components/weather-updates/weather-updates.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FooterModule,
    HeaderModule,
    MainModule,
    HttpClientModule,
    WeatherUpdatesModule,
    StoreModule.forRoot({weather: WeatherReducer}),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
