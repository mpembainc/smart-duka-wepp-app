import { InitializeState } from './shared/state/app.actions';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new InitializeState());
  }
}
