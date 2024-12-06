import { Component } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-to-add-new',
  standalone: false,
  
  templateUrl: './form-to-add-new.component.html',
  styleUrl: './form-to-add-new.component.css'
})

export class FormToAddNewComponent {
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
