import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: any;

  todo: any;



  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(){

    this.id =this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false,new Date());


    if(this.id!=-1)
    this.todoService.retrieveTodo('ochidi1', this.id).
    subscribe(
       data => this.todo = data

    )

  }


  saveTodo(){
    this.todoService.updateTodo('ochidi1', this.id, this.todo)
    .subscribe(
      data => {console.log(data)
        this.router.navigate(['todos'])
      }
    )
  }

}
