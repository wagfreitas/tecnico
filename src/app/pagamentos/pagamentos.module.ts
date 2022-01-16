import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';


import { IonicModule } from '@ionic/angular';

import { PagamentosPage } from './pagamentos.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentosPage
  }
];

@NgModule({
  imports: [

  CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagamentosPage], 
  providers: [Storage]
})
export class PagamentosPageModule {}
