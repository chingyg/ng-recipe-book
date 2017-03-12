import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent, RecipeListComponent } from './recipes';
import { ShoppingListComponent, ShoppingListService } from './shopping-list';
import { RecipeService } from './recipes';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers:[RecipeService, ShoppingListService]
})
export class AppComponent {
    


}
