import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
@Component(
{
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
  })
export class ShoppingListComponent implements OnInit
{
  ingredients: Ingredient[];
  constructor(private service: ShoppingListService) { }
  ngOnInit(): void
  {
    this.ingredients = this.service.getAll();
    this.service.changes.subscribe(
      (ingredients: Ingredient[]) =>
      {
        this.ingredients = ingredients;
      });
  }
}
