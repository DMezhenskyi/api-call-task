import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ListComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    ListComponent,
    CommonModule
  ]
})
export class SharedModule { }
