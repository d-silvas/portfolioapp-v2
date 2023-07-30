import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SbuxComponent } from './sbux.component';

const routes: Routes = [{ path: '', component: SbuxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SbuxRoutingModule {}
