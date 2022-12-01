import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';
import { CliDocComponent } from './cli-doc/cli-doc.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    LearnAngularComponent,
    CliDocComponent,
    AngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
