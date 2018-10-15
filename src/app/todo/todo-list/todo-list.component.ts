import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../model/todo.model';
import { filterAvailable } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public $todos: Observable<Todo[]>
  public todos: Todo[]
  public filter: filterAvailable
  public _subs: Subscription = new Subscription()

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.$todos = this.store.select('todos')
    let subState = this.store.subscribe(
      (state) => {
        this.todos = state.todos
        this.filter = state.filter
      }
    )
    
    this._subs.add(subState)
  }

  ngOnDestroy(){
    this._subs.unsubscribe()
  }

}
