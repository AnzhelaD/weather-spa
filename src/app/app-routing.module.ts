import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginModule} from "./components/logIn/login.module";
import {LoginComponent} from "./components/logIn/login.component";
import {WeatherUpdatesComponent} from "./components/weather-updates/weather-updates.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: ':name', component: WeatherUpdatesComponent },
  { path: ':name/:country', component: WeatherUpdatesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
