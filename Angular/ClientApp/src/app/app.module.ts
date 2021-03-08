import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ExampleComponent } from './home/examples/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './home/examples/success/success.component';
import { WarningComponent } from './home/examples/warning/warning.component';

import { Home2Component } from './home/recipes/home2.component';
import { HeaderComponent } from './home/recipes/header/header.component';
import { RecipesComponent } from './home/recipes/recipes/recipes.component';
import { RecipeListComponent } from './home/recipes/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './home/recipes/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './home/recipes/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './home/recipes/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './home/recipes/shopping-list/shopping-edit/sthopping-edit.component';
import { ShoppingListService } from './home/recipes/shopping-list/shopping-list.service';
import { DropdownDirective } from './home/recipes/shared/dropdown.directive';

import { Home3Component } from './home/game/home3.component';
import { GameControlComponent } from './home/game/game-control/game-control.component';
import { EvenComponent } from './home/game/even/even.component';
import { OddComponent } from './home/game/odd/odd.component';
import { BasicHighlightDirective } from './home/game/directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './home/game/directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './home/game/directives/unless/unless.directive';

import { Home4Component } from './home/accounts/home4.component';
import { AccountsService } from './home/accounts/services/accounts.service';
import { LoggingService } from './home/accounts/services/logging.service';
import { AccountComponent } from './home/accounts/account/account.component';
import { NewAccountComponent } from './home/accounts/new-account/new-account.component';
import { ActiveUsersComponent } from './home/accounts/active-users/active-users.component';
import { InactiveUsersComponent } from './home/accounts/inactive-users/inactive-users.component';
import { UserService } from './home/accounts/services/user.service';
import { CounterService } from './home/accounts/services/counter.service';

import { HomeComponent } from './home/router/home/home.component';
import { UsersComponent } from './home/router/users/users.component';
import { ServersComponent } from './home/router/servers/servers.component';
import { UserComponent } from './home/router/users/user/user.component';
import { EditServerComponent } from './home/router/servers/edit-server/edit-server.component';
import { ServerComponent } from './home/router/servers/server/server.component';
import { WelcomeComponent } from './home/router/welcome/welcome.component';
import { ServersService } from './home/router/servers/servers.service';

const appRoutes: Routes =
[
  /*{ path: '', component: ExampleComponent, pathMatch: 'full' },*/
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent }, { path: '', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: EditServerComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ExampleComponent,
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
    InactiveUsersComponent,
    HomeComponent,
    WelcomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountsService, LoggingService, UserService, CounterService, ShoppingListService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
