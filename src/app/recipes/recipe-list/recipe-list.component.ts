import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('A Recipe', 'A Test Recipe desctiption', 'https://tse2.mm.bing.net/th?id=OIP.B02n_SjgqgteticukENrggHaHa&pid=Api&P=0&w=300&h=300')]
  constructor() { }

  ngOnInit(): void {
  }

}
