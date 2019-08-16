import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  entry: String ;
  data: Object;
  tasks: Array<String>;
  i: number;
  // length = this.tasks.length;
  constructor(public listService: ListService) { }
  
  ngOnInit() {
    
    // console.log(tasks);
  }

  enterToDo(input): void{
    this.data = {"task": input, "status": false};
    this.listService.save(this.data);
    console.log(input);
  }
  deleteAll(): void{
    this.listService.getJSON().subscribe(tasks => {this.tasks = tasks.todo
      console.log(this.tasks);
      for(this.i = 0 ; this.i < this.tasks.length ; this.i++){
        this.listService.deleteCurrent(this.tasks[this.i]['id']);
      }
    });
  }
  getTasks(): void{
    
    // console.log
  }

  

  

  

}
