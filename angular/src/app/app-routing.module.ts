import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'tarefas', pathMatch:"full"},
  {path: 'tarefas', loadChildren: () => import('./tarefas/tarefas.module').then(m => m.TarefasModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
