import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipe.service';
@Component(
{
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesService]
  })
export class RecipesComponent
{
  selection: Recipe;
  set(event)
  {
    this.selection = event;
  }
}
