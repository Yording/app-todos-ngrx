import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.action';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public flagAllCompleted: boolean = false

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.flagAllCompleted = !this.flagAllCompleted
    this.store.dispatch(new ToggleAllTodoAction(this.flagAllCompleted))
  }

}
