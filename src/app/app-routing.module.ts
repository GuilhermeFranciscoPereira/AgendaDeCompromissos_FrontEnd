import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormToAddNewComponent } from './components/form-to-add-new/form-to-add-new.component';
import { TableAgendasComponent } from './components/table-agendas/table-agendas.component';

const routes: Routes = [
  {path: 'AdicionarNovoCompromisso', component: FormToAddNewComponent},
  {path: '', component: TableAgendasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
