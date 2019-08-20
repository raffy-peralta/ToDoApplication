import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Tasks } from '../../models/Tasks'; 
import { Observable } from 'rxjs';
import { ListComponent } from '../list/list.component';
import { FormControl, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  list: Tasks[];
  data: Tasks;
  tasks: Observable<String>;

  entry = new FormControl('',Validators.required);

  i: number;
  // length = this.tasks.length;
  constructor(public listService: ListService) { 
   }
  
  ngOnInit() {
    this.getTasks();
  }

  enterToDo(): void{
    console.log(this.entry);
    
    if (this.entry.valid){
      let json = {title: this.entry.value, status: false};
      this.listService.save(json).subscribe((data)=> {
        this.getTasks();
        this.entry = new FormControl('',Validators.required);
        console.log(data)
      });
    }
    
  }
  deleteAll(): void{
    this.listService.getJSON().subscribe(tasks => {this.tasks = tasks
      this.tasks.forEach(element => {
        this.listService.deleteCurrent(element['id']).subscribe((data)=>{
          this.getTasks();
        });
      });

    });
  }

  getTasks(): void{
    this.listService.getJSON().subscribe((data)=>{
      this.list = data;
      console.log('todo component');
      
      console.log(this.list);
      
    });
  }

  

  

  

  

}
