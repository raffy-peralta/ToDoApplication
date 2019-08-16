import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: Object;
  tasks: Array<String>;
  editable: boolean = false;
  editId: number;
  input: any;
  checked: boolean;
  itemsPerPage: number = 5;
  totalItems: any;
  page: any = 1;
  previousPage: any;
  pageSize: number = 5;
  i: number;
  length: number;
  

  
  constructor(private listService: ListService) {
    
   }

  ngOnInit() {
    this.getTasks();

    // this.listService.getJSON().subscribe(data => {
    //   this.listService.notes = data;
    //   console.log(this.listService.notes)
    // })
  }
  
  onEnter(input, id, checked){
    this.input = input;
    this.data = {"task": input, "checked": checked};
    console.log(this.data);
    this.listService.update(this.data, id)
  }
  updateCheck(input, id, checked){
    
    this.data = {"task": input, "checked": checked};
    
    this.listService.update(this.data, id)
  }
  key: string = 'task'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  edit(id){
    this.editable = true;
    this.editId = id;
  }
  status(){
    this.editable = false;
  }

  deleteCurrent(i: number): void{
    this.listService.deleteCurrent(i);
  }
  

  getTasks(): void{
    this.listService.getJSON().subscribe(tasks => {
      this.tasks = tasks.todo;
      this.length = this.tasks.length;
      // for(this.i = 0 ; this.i < this.tasks.length ; this.i++ ){
      //   this.tasks[this.i]['task'] = this.tasks[this.i]['task'].toLowerCase();
      //   console.log(this.tasks[this.i]['task']);
      // }
      
    });
    // console.log
  }


}
