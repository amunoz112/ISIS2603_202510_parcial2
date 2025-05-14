import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { RouterModule } from '@angular/router';
import { CandidatosRoutingModule } from './candidatos-routing.module';

@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    RouterModule
  ],
  exports: [
    CandidatosListComponent
  ]

})
export class CandidatosModule { }
