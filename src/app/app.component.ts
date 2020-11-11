import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy { 
  secondes: number
  counterSubscription : Subscription
  constructor(){}
  ngOnInit(){
    const counter = Observable.interval(1000)
    this.counterSubscription = counter.subscribe ((value: number) =>{ // s'inscrire a une observable il y a trois arguments : valeur , erreur , complete
        this.secondes = value
      },
      (error: any) => {
        console.log('Une erreur')
      },
      () => {
        console.log('Observable complétée !')
      }
    )   
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe() // detruit la subscription a la fin de la vie du composant
  }

}
