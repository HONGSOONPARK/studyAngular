


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { ContentsComponent } from './main/contents/contents.component';



const routes: Routes = [

  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
    // children: [
    //   {
    //   }
    // ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
