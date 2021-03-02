import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

import { Home2Component } from './home2/home2.component';
import { HeaderComponent } from './home2/header/header.component';
import { RecipesComponent } from './home2/recipes/recipes.component';
import { RecipeListComponent } from './home2/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './home2/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './home2/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './home2/shopping-list/sthopping-list.component';
import { ShoppingEditComponent } from './home2/shopping-list/shopping-edit/sthopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ErrorComponent,
    SuccessComponent,
    WarningComponent,
    Home2Component,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
