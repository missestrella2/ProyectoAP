import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/model/persona.model'
import { HttpClient } from '@angular/common/http';
//import { enviroment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/personas/';



  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
    
    

  }
}
