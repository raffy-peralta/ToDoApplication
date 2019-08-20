import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  notes: any[] = [];
  i: number;
  baseUrl = 'http://localhost:5000/todo';
  constructor(private http: HttpClient){
    this.getJson().subscribe(data => {
      // console.log(data);
    });
  }

    

  // save(data){
  //   // this.notes.push(note);
    // let options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }
  //   return fetch(this.baseUrl, options)
  //     .then((response) => response.json)
    
  // }
  save(data){
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl, data, {headers});
  }
  
  update(data, id){
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.put(this.baseUrl+'/'+id, data, {headers});
  }
  

  

  deleteCurrent(i: number){
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.delete(this.baseUrl+'/'+i, {headers});
  }

  getJson(): Observable<any>{
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(this.baseUrl, {headers});
  }
  
}
