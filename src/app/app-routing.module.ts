import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchBarComponent} from './search-bar-ingridients/search-bar.component';
import {SearchResultsIngridientsComponent} from './search-results-ingridients/search-results-ingridients.component';
import {SearchResultsRecipiesComponent} from './search-results-recipies/search-results-recipies.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: SearchBarComponent},
  {path: 'ingridientsresult/:ing' , component: SearchResultsIngridientsComponent},
  {path: 'recipesresults', component: SearchResultsRecipiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
