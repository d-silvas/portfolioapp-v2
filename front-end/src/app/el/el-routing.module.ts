import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElComponent } from './el.component';

const routes: Routes = [{ path: '', component: ElComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElRoutingModule {}
