import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component(
{
  selector: 'app-shopping-list-shopping-edit',
  templateUrl: './shopping-edit.component.html'
  })
export class ShoppingEditComponent
{
  constructor(private service: ShoppingListService) { }
  add(ingredient: { name: HTMLInputElement, amount: HTMLInputElement })
  {
    this.service.add(new Ingredient(ingredient.name.value, parseInt(ingredient.amount.value)))
  }
}
