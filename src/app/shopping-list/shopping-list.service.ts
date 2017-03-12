import { Ingredient } from '../shared';

export class ShoppingListService {
private items: Ingredient[] = [];
  constructor() { }

  getItems(){
  	return this.items;
  }
  addItems(items: Ingredient[])
  {
  	// user default push method from array prototype to apply the  push from items to this.item. This is how you push an entire array to another
  	Array.prototype.push.apply(this.items,items);
  }

}
