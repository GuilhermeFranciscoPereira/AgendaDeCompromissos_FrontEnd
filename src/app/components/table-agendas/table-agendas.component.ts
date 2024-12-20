import { Component, OnInit } from '@angular/core';
import { AgendaType } from '../../types/AgendaTypes';
import { AgendaService } from '../../services/agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-agendas',
  standalone: false,
  
  templateUrl: './table-agendas.component.html',
  styleUrl: './table-agendas.component.css'
})
export class TableAgendasComponent implements OnInit {
  agendas : Array<AgendaType> = [];
  constructor(private service: AgendaService) {};

  ngOnInit(): void {
      this.loadAgendas();
  }

  loadAgendas() {
    this.service.getAgendas().subscribe({
      next: data => this.agendas = data
    })
  }

  delete(agenda: AgendaType) {
    this.service.delete(agenda).subscribe({
      next: () => this.loadAgendas()
    })
  }
} 
