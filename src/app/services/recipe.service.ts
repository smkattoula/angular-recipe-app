import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../features/recipes/recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg',
      [new Ingredient('Burger', 1), new Ingredient('Milk Shake', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
