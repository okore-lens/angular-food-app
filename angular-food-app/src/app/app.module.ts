import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingListComponent,
    RecipeListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
