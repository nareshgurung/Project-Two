import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../models/card';
import { CardService } from '../../service/category-card/card.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.cardService.getCards().subscribe(cards => this.cards = cards);
    if(this.cards){
      
    } else {
      this.router.navigateByUrl('../error');
    }
  }

}
