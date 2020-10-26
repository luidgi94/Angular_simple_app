import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

   // lastUpdate = new Date()
   lastUpdate = new Promise(
    (resolve,reject)=>{
      const date = new Date()
      setTimeout(
        ()=>{
          resolve(date)
        },2000
      ) 
    }
  )
  isAuth= false
  appareils: any []

  constructor( private appareilService: AppareilService){ // On inject le service dans le constructor mais il faut aussii l'implementer dans la declaration de classe
    setTimeout(
      ()=>{
        this.isAuth = true
      } ,4000
    )
  }
  ngOnInit(){ // executé apres la creation du component par angular just apres le constructor
      this.appareils = this.appareilService.appareils // recupère le tableau dans le service appareilService et le rajoute dans appareil = any []
  }
  onAllumer(){
    this.appareilService.switchOnAll()
    console.log('tt est allumé')
  }

  onEteindre(){
    this.appareilService.switchOffAll()
    console.log('tt est allumé')
  }

}
