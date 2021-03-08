import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipe.service';
@Component(
{
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesService]
  })
export class RecipesComponent implements OnInit
{
  selection: Recipe;
  constructor(private service: RecipesService) { }
  ngOnInit(): void
  {
    this.service.selected.subscribe(
      (recipe: Recipe) =>
      {
        this.selection = recipe;
      })
  }
}
