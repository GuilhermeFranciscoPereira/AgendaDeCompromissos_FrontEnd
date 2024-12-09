import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-to-agenda',
  standalone: false,
  
  templateUrl: './form-to-agenda.component.html',
  styleUrl: './form-to-agenda.component.css'
})

export class formToAgendaComponent implements OnInit{
  formGroupAgenda: FormGroup;
  Editing = false;
  Creating = true;

  constructor(private service: AgendaService, private router: Router, private activeRoute: ActivatedRoute, private formBuilder: FormBuilder){
    this.formGroupAgenda = formBuilder.group({
      id: [''],
      name: [''],
      local: [''],
      date: ['']
    });
  }

  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    if (id !== 0) {
      this.service.getAgendaById(id).subscribe({
        next: (data) => this.formGroupAgenda.setValue(data),
      });
      this.Editing = true;
      this.Creating = false;
    }
  }

  save() {
    this.service.save(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['/'])
    });

    alert('Compromisso salvo com sucesso!')
  }

  update() {
    this.service.update(this.formGroupAgenda.value).subscribe({
      next:  () => this.router.navigate(['/'])
    })
  
  alert('Compromisso atualizado com sucesso!')
  }
}
