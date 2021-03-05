import { Recipe } from "./recipe.model";
export class RecipesService {
    constructor() {
        this.recipes = [new Recipe("Test", "Test", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872")];
    }
    getAll() {
        return this.recipes.slice();
    }
}
//# sourceMappingURL=recipe.service.js.map