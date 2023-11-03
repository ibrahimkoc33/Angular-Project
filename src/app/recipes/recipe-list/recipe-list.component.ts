import { Component } from '@angular/core';
import { Recipe } from 'src/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  recipes: Recipe[]= [
    new Recipe('Tavuklu Pilav','Tavuk ve pilavı haşla','https://i0.wp.com/bubenimtarifim.com/wp-content/uploads/2022/03/Tavuklu-Pirinc-Pilavi.png?w=653&ssl=1'),
    new Recipe('Kıymalı Börek','Böreğin içine kıyma koy','https://cdn.yemek.com/mncrop/940/625/uploads/2019/01/kiymali-citir-borek-yemekcom.jpg')
  ];
  constructor(){

  }
}
