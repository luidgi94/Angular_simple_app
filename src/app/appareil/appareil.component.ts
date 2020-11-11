import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string; // permet d'etre envoyer aux composant enfant comme props(import Input
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor( private appareilService: AppareilService ) { 


  }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }

  getColor(){
    if (this.appareilStatus === 'allumé') return 'green'
    else if (this.appareilStatus === 'éteint') return 'red'
    
  }
  onSwitchOn(){
    this.appareilService.SwitchOnOne(this.indexOfAppareil)

  }
  onSwitchOff(){
    this.appareilService.SwitchOffOne(this.indexOfAppareil)

  }

}
