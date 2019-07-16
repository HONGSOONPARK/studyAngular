import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { ContentsComponent } from './main/contents/contents.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbSidebarModule.forRoot(),
    // NbMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
