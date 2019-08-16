import { Component, OnInit } from '@angular/core';

import { Hero } from "../Hero";
import { HeroService} from "../hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes=>{
        //console.log(heroes);
        this.heroes = heroes.slice(1,5)
        return
      })
    }


  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

}
