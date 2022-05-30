import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HttpClientModule } from '@angular/common/http';
//import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { SearchComponent } from './search/search.component';
import { MovComponent } from './mov/mov.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
