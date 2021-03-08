import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
    constructor() {
        this.ingredients = [
            new Ingredient("Apple", 5),
            new Ingredient("Tomatoe", 10)
        ];
    }
    getAll() {
        return this.ingredients.slice();
    }
    add(ingredient) {
        this.ingredients.push(ingredient);
    }
}
//# sourceMappingURL=shopping-list.service.js.map