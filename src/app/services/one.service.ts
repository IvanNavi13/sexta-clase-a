import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OneService {

  constructor(private http: HttpClient) { }

  getCharacters() : Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/character")
  }
  
  getCharacter(name:string): Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/character/?name="+name)
  }

}
