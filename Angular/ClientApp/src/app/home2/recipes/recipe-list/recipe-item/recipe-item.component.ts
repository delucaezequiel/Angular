import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model'
@Component(
{
  selector: 'app-recipes-recipe-list-recipe-item',
  templateUrl: './recipe-item.component.html'
  })
export class RecipeItemComponent
{
  @Input() recipe: Recipe;
  onClick()
  {

  }
}
