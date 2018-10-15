import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions'
import * as fromTodos from '../todo.action'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit, OnDestroy {

  public filterAvailables: fromFilter.filterAvailable[] = [
    'todos',
    'completados',
    'pendientes'
  ]
  public currentFilter: fromFilter.filterAvailable
  public countTodos: number = 0
  public subs: Subscription = new Subscription()

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.setSubscriptions()
  }

  // Destruye todas las subscripciones
  ngOnDestroy(){
    this.subs.unsubscribe()
  }

  /**
   * Función para setear todas las subscripciones
   */
  setSubscriptions(){
    // subscripción de mis filtros
    let subFilter = this.store.select('filter').subscribe(
      (filter) => {
        this.currentFilter = filter
      }
    )

    // subscripción de mis tareas
    let subTodos = this.store.select('todos').subscribe(
      (todos) => {
        this.countTodosNotCompleted(todos)
      }
    )

    // Guardó mis suscripciones para luego de suscribirme
    this.subs.add(subFilter)
    this.subs.add(subTodos)
  }

  /**
   * Función que permite cambiar de filtro
   * @param filter parametró que recibe el filtro a setear
   */
  changeFilter(filter: fromFilter.filterAvailable){
    this.store.dispatch(new fromFilter.SetFilterAction(filter))
  }

  /**
   * Función que cuenta las tareas que estan pendientes
   * @param todos parámetro de todas las tareas disponibles
   */
  countTodosNotCompleted(todos: Todo[]){
    this.countTodos = todos.filter(todo => !todo.completed).length
  }

  /**
   * Limpiar todos los todos completados
   */
  clearTodosCompleted(){
    this.store.dispatch(new fromTodos.ClearTodosCompletedAction())
  }

}
