import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [
  {
    path: 'users'
  , component: UsersComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
