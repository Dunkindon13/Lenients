import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar-ingridients/search-bar.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { SearchDialogComponent } from './search-dialog-Ingridients/search-dialog.component';
import {SearchDialogRecipesComponent} from './search-dialog-recipes/search-dialog-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchDialogComponent,
    SearchDialogRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SearchDialogComponent, SearchDialogRecipesComponent]
})
export class AppModule { }
