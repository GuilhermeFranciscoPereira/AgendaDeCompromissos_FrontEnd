import { Component } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-to-agenda',
  standalone: false,
  
  templateUrl: './form-to-agenda.component.html',
  styleUrl: './form-to-agenda.component.css'
})

export class formToAgendaComponent {
  formGroupAgenda: FormGroup;

  constructor(private service: AgendaService, private router: Router, private formBuilder: FormBuilder){
    this.formGroupAgenda = formBuilder.group({
      name: [''],
      local: [''],
      date: ['']
    });
  }

  save() {
    this.service.save(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['/'])
    });

    alert('Compromisso salvo com sucesso!')
  }
}
