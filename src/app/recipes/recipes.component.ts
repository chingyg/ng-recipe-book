import { Component, OnInit, Input } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail';
import { RecipeListComponent } from './recipe-list';
import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

	selectedRecipe: Recipe; 
  constructor() { }

  ngOnInit() {
  }

ngOnChanges(){
	console.log('we');
}
}
