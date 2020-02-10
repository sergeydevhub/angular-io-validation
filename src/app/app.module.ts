import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserRestService } from '@core/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserRestService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
