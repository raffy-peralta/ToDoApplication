import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  static baseUrl: string;
  constructor(private http: HttpClient) { }

  load(){
    const jsonFile = '../assets/config.json';
    return new Promise<void>((resolve,reject)=>{
      this.http.get(jsonFile).toPromise().then((response: String)=>{
        ConfigService.baseUrl =  <string>response;
        localStorage.setItem('baseUrl', JSON.stringify(response));
        resolve();
      }).catch((response: any)=>{
        reject('Could not load config file.');
      });
    });
  }
}
export function initializeApp(configService: ConfigService) {
  console.log(configService.load());
  return () => configService.load();
}
