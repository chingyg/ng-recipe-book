import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();

	// Dummy recipe
	// recipe = new Recipe('Ducky','description','http://hybridchildrencommunity.com/wp-content/uploads/2014/01/baby_duck_hd_widescreen_wallpapers_1440x900.jpeg');

	onSelected(recipe: Recipe){
		this.recipeSelected.emit(recipe);
		console.log(recipe);
	}

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  	this.recipes = this.recipeService.getRecipes();
  }

}
