import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovComponent } from './mov/mov.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  
  { path: '', component: SearchComponent},
  { path: 'search', component: SearchComponent },
  {path: 'search/:mov/:text/:page', component: MovComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
