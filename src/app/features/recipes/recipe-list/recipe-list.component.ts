import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetailEvent2 = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg'
    ),
    new Recipe(
      'Test Recipe 3',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg'
    ),
    new Recipe(
      'Test Recipe 4',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void { }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeDetailEvent2.emit(recipe)
  }
}
