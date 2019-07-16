import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { ContentsComponent } from './main/contents/contents.component';



const routes: Routes = [

  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '',  component: AppComponent },
  { path: 'main', component: MainComponent },
  { path: 'contents', component: ContentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
