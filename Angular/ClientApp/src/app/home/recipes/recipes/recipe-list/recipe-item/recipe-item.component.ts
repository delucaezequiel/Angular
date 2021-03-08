import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipesService } from '../../recipe.service';
@Component(
{
  selector: 'app-recipes-recipe-list-recipe-item',
  templateUrl: './recipe-item.component.html'
  })
export class RecipeItemComponent
{
  @Input() recipe: Recipe;
  constructor(private service: RecipesService) { }
  onClick()
  {
    this.service.selected.emit(this.recipe);
  }
}
