import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
export class ShoppingListService
{
  changes = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] =
    [
      new Ingredient("Apple", 5),
      new Ingredient("Tomatoe", 10)
    ]
  getAll()
  {
    return this.ingredients.slice()
  }
  add(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
    this.changes.emit(this.ingredients.slice());
  }
  addAll(ingredients: Ingredient[])
  {
    this.ingredients.push(...ingredients);
    this.changes.emit(this.ingredients.slice());
  }
}
