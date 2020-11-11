import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppareilService} from "../services/appareil.service"
@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil'
  status: string ='Statut'
  constructor( private appareilService: AppareilService, private route: ActivatedRoute) { } // activated route permet de recuperer kles information du composant route activé

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    console.log('id ===' + this.route.snapshot.params['id'])
    console.log('On a trouvé ' + this.appareilService.getAppareilById(+id) ) 
    let appareil= this.appareilService.getAppareilById(+id)
    this.name = appareil.name
    this.status = appareil.status
    
  }

}
