import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo{
  constructor (
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined;

  message: string | undefined;
//   todos = [
// new Todo(1, 'do your laundry', false, new Date()),
// new Todo(2, 'do the dishes', false, new Date()),
// new Todo(3, 'kiss the frog', false, new Date())

// ];

  constructor(private todoService:TodoDataService , private router: Router ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('obi').subscribe(
      response => {
        console.log(response);
        this.todos = response;

      }

          )
  }
 deleteTodo(id: any){
console.log(`deleted todo ${id} `);
this.todoService.deleteTodo("obi" ,  id).subscribe(
  response => {
    console.log(response);
    this.message =`Delete  of Todo ${id} Successful!`
    this.refreshTodos();
  }
);

 }
 updateTodo(id: any){
   console.log (`update ${id}`);
   this.router.navigate(['todos' , id]);
 }
 addTodo(){
  this.router.navigate(['todos' , -1]);
 }
}
