import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component(
{
  selector: 'app-recipes-recipe-details',
  templateUrl: './recipe-details.component.html'
  })
export class RecipeDetailsComponent
{
  @Input() recipe: Recipe;
}
