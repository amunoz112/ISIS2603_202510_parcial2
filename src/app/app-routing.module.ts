import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosListComponent } from './candidatos/candidatos-list/candidatos-list.component';

const routes: Routes = [
    { path: '', component: CandidatosListComponent },
    { path: 'candidatos', loadChildren: () => import('./candidatos/candidatos.module').then(m => m.CandidatosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
