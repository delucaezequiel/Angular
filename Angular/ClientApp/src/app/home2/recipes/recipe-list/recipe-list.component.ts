import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipe.service';
@Component(
{
  selector: 'app-recipes-recipe-list',
  templateUrl: './recipe-list.component.html'
  })
export class RecipeListComponent implements OnInit
{
  recipes: Recipe[];
  @Output() selection = new EventEmitter<Recipe>();
  constructor(private service: RecipesService)
  {

  }
  ngOnInit()
  {
    this.recipes = this.service.getAll();
  }
  onClick(recipe: Recipe)
  {
    this.selection.emit(recipe);
  }
}
