import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component(
{
  selector: 'app-shopping-list-shopping-edit',
  templateUrl: './shopping-edit.component.html'
  })
export class ShoppingEditComponent
{
  @Output() ingredient = new EventEmitter<Ingredient>();
  add(ingredient: { name: HTMLInputElement, amount: HTMLInputElement })
  {
    this.ingredient.emit(new Ingredient(ingredient.name.value, parseInt(ingredient.amount.value)));
  }
}
