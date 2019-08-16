import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  notes: any[] = [];
  i: number;
  baseUrl = 'http://localhost:5000/todo';
  constructor(private http: HttpClient){
    this.getJSON().subscribe(data => {
      // console.log(data);
    });
  }
  save(data){
    // this.notes.push(note);
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(this.baseUrl, options)
      .then((response) => response.json)
    
  }
  update(data, id){
    let options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(this.baseUrl+'/'+id, options)
      .then((response) => response.json)
  }
  

  

  deleteCurrent(i: number){
    let options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      
    }
    return fetch(this.baseUrl+'/'+i, options)
      .then((response) => response.json)
    
  }

  public getJSON(): Observable<any>{
    
    return this.http.get('./assets/db.json');
  }
  
}
