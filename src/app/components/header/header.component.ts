import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectUsername} from "../../store/weather.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  username$ = this.store.select(selectUsername);
  constructor(private store: Store) {}

}
