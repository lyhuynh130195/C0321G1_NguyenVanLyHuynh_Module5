import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';

let _id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  todo: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(){
    this.todoService.getAll().subscribe( todos => {
      this.todos = todos;
    });
  }
  toggleTodo(id: number) {
    this.todoService.findById(id).subscribe(value => {
      this.todo = value;
      this.todo.complete =  !this.todo.complete;
      this.todoService.compelete(id,this.todo).subscribe(()=>{
        this.getTodos()
      })
    })
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(() =>{
        this.getTodos()
        this.content.reset()
      })
    }
  }


  delete(id: number) {
  this.todoService.remove(id).subscribe(()=>{
    this.getTodos()
  })
  }
}
