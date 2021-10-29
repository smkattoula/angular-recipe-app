import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://live.staticflickr.com/65535/50889476642_a1d1192cc0_b.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
