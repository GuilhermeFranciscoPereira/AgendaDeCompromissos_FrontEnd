import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formToAgendaComponent } from './components/form-to-agenda/form-to-agenda.component';
import { TableAgendasComponent } from './components/table-agendas/table-agendas.component';

const routes: Routes = [
  {path: '', component: TableAgendasComponent},
  {path: 'FormularioCompromisso', component: formToAgendaComponent},
  {path: 'FormularioCompromisso/\:id', component: formToAgendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
