import { NgModule } from '@angular/core';

import { GithubService } from './github.service';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [GithubService]
})
export class CoreModule { }
