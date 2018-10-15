import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromTodos from '../todo.action'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputTextEdit') inputTextEdit: ElementRef
  @Input() todo: Todo
  public checkField: FormControl
  public txtInput: FormControl
  public flagEdit: boolean = false

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.setForm()
    this.checkedTodo()
  }

  /**
   * Función que permite suscribirme 
   * a cualquier cambio del check para el todo
   * y me despacha la acción de completed tarea
   */
  checkedTodo(){
    this.checkField.valueChanges.subscribe(
      () => {
        this.store.dispatch(new fromTodos.ToggleTodoAction(this.todo.id))
      }
    )
  }

  setForm(){
    this.checkField = new FormControl(this.todo.completed)
    this.txtInput = new FormControl(this.todo.text, Validators.required)
  }

  openEditing(){
    this.flagEdit = true
    setTimeout(() => {
      this.inputTextEdit.nativeElement.select()  
    }, 0);
  }

  closeEditing(){
    // Si los dos valores son iguales no despachará
    // ninguna acción
    if (this.txtInput.value === this.todo.text) {
      return
    }
    if(this.txtInput.valid && this.flagEdit){
      this.store.dispatch(new fromTodos.EditTodoAction(this.todo.id, this.txtInput.value))  
    }
    this.flagEdit = false;
  }

  deleteTodo(){
    this.store.dispatch(new fromTodos.DeleteTodoAction(this.todo.id))
  }

}
