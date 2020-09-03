import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReposComponent } from './repos/repos.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'components', component: ProfileComponent},
  { path: 'repos', component: ReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
