import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as fromTodos from '../todo.action'

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  public txtInput: FormControl

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required)
  }

  addTodo(){
    if(this.txtInput.valid){
      this.store.dispatch(new fromTodos.AddTodoAction(this.txtInput.value))
      this.txtInput.setValue('')
    }
  }

}
