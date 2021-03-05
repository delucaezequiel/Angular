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
import { UnlessDirective } from './home3/directives/unless/unless.directive';
import { DropdownDirective } from './home2/shared/dropdown.directive';

import { Home3Component } from './home3/home3.component';
import { GameControlComponent } from './home3/game-control/game-control.component';
import { EvenComponent } from './home3/even/even.component';
import { OddComponent } from './home3/odd/odd.component';
import { BasicHighlightDirective } from './home3/directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './home3/directives/better-highlight/better-highlight.directive';

import { Home4Component } from './home4/home4.component';
import { AccountsService } from './home4/services/accounts.service';
import { LoggingService } from './home4/services/logging.service';
import { AccountComponent } from './home4/account/account.component';
import { NewAccountComponent } from './home4/new-account/new-account.component';
import { ActiveUsersComponent } from './home4/active-users/active-users.component';
import { InactiveUsersComponent } from './home4/inactive-users/inactive-users.component';
import { UserService } from './home4/services/user.service';
import { CounterService } from './home4/services/counter.service';

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
    ShoppingEditComponent,
    Home3Component,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    Home4Component,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
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
  providers: [AccountsService, LoggingService, UserService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
