import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sbux',
    loadChildren: () => import('./sbux/sbux.module').then((m) => m.SbuxModule),
  },
  {
    path: 'el',
    loadChildren: () => import('./el/el.module').then((m) => m.ElModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
