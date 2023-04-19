import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardSession } from './guard/auth.session.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/layout/layout.module').then((m) => m.LayoutModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authentication/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuardSession],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
