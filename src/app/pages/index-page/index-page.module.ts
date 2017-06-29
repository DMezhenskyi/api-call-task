import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { IndexPageRoutingModule } from './index-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    SharedModule
  ],
  declarations: [IndexPageComponent],
  exports: [IndexPageComponent ]
})
export class IndexPageModule { }
