import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  name: string;
  desc: string;
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test Recipe Desc")
  ];

  constructor() { }

  ngOnInit() {
  }
 
  onClickAddRecipe(){
    this.recipes.push(new Recipe(this.name, this.desc));
  } 

}
