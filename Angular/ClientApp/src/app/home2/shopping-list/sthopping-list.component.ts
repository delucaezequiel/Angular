import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
@Component(
{
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
  })
export class ShoppingListComponent
{
  ingredients: Ingredient[] =
  [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatoe", 10)
  ]
  add(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
  }
}
