import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../features/recipes/recipe-list/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
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

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
