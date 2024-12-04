import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendaType } from '../types/AgendaTypes';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = ''

  constructor(private http:HttpClient) { }
  getAgendas(): Observable<Array<AgendaType>> {
    return this.http.get<Array<AgendaType>>("http://localhost:8080/agenda");
  }
}
