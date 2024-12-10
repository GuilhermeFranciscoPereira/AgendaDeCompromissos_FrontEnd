import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendaType } from '../types/AgendaTypes';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = 'https://api.agendadecompromissos.duckdns.org/agenda'

  constructor(private http:HttpClient) { }

  getAgendas(): Observable<Array<AgendaType>> {
    return this.http.get<Array<AgendaType>>(this.url);
  }

  getAgendaById(id: number): Observable<AgendaType> {
    return this.http.get<AgendaType>(`${this.url}/${id}`);
  }

  delete(agenda: AgendaType): Observable<void> {
    return this.http.delete<void>(this.url + `/${agenda.id}`);
  }

  save(agenda: AgendaType): Observable<AgendaType> {
    return this.http.post<AgendaType>(this.url, agenda);
  }

  update(agenda: AgendaType): Observable<AgendaType> {
    return this.http.put<AgendaType>(this.url + `/${agenda.id}`, agenda);
  }

}