import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import {Sort} from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Tasks } from '../../models/Tasks'; 
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  data: Tasks;
 
  @Input() tasks: Tasks[];
  editable: boolean;
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
  key: string = 'task'; //set default
  reverse: boolean = false;
  

  
  constructor(private listService: ListService) {
    console.log('list 1');
    
   }

  ngOnInit() {
    console.log('list 2');
    this.getTasks();  
    
    
    // this.listService.getJSON().subscribe(data => {
    //   this.listService.notes = data;
    //   console.log(this.listService.notes)
    // })
  }

  
  onEnter(input, id, checked){
    this.input = input;
    this.data = {"title": input, "status": checked};
    console.log(this.data);
    this.listService.update(this.data, id).subscribe((data)=>{
      this.status();
      this.getTasks();
    });
  }
  updateCheck(input, id, checked){
    
    this.data = {"title": input, "status": checked};
    
    this.listService.update(this.data, id).subscribe((data)=>{
      this.getTasks();
    });
    
  }
 
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
    this.listService.deleteCurrent(i).subscribe((data)=>{
      this.getTasks();
    });  
  }

  getTasks(): void{
    this.listService.getJSON().subscribe((data) =>{
      this.tasks = data;
      
    });
    
    // this.listService.getJSON().subscribe(tasks => {
    //   // console.log(tasks);
    //   // this.tasks = tasks;

    // });
    // // console.log
  }


}
