import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipe.service';
@Component(
{
  selector: 'app-recipes-recipe-details',
  templateUrl: './recipe-details.component.html'
  })
export class RecipeDetailsComponent implements OnInit
{
  @Input() recipe: Recipe;
  constructor(private service: RecipesService) { }
  ngOnInit(): void
  {
  }
  onClickToShoppingList()
  {
    this.service.addToShoppingList(this.recipe.ingredients);
  }
}
