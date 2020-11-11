import { Subject } from 'rxjs/Subject'
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AppareilService{

    appareilSubject = new Subject<any[]>()
    private appareils=[]

    constructor(private httpClient: HttpClient){}

    emitAppareilSubject(){
      this.appareilSubject.next(this.appareils.slice())
      
    }
    getAppareilById(id : number){
      const appareil = this.appareils.find(
        (appareilObject) => {
           return appareilObject.id === id
        }
      )
      return appareil
    }

    switchOnAll (){
        for(let appareil of this.appareils){
            appareil.status = 'allumé'
        }
        this.emitAppareilSubject() // on emet le changement au autre composant pour qu'il le voit
    }

    switchOffAll (){
        for(let appareil of this.appareils){
            appareil.status = 'éteint'
        }
        this.emitAppareilSubject()
    }

  

    SwitchOnOne ( index: number){
      this.appareils[index].status = 'allumé'
      this.emitAppareilSubject()
    }
    

    SwitchOffOne ( index: number){
      this.appareils[index].status = 'éteint'
      this.emitAppareilSubject()
    }

    addAppareil(name: string, status: string){
    const appareilObject= {  id: 0,
      name: "",
      status: ""
    }
    appareilObject.name = name
    appareilObject.status = status
    appareilObject.id = this.appareils[(this.appareils.length -1)].id +1
    this.appareils.push(appareilObject)
    this.emitAppareilSubject()
    }

    saveAppareilsToServer(){
      this.httpClient.put('https://http-client-demo-27c5f.firebaseio.com/appareils.json', this.appareils) // appareil.json et le deuxième argument sont les données envoyées au serveur
      .subscribe(
        () => {
          console.log(' enregistrement terminé')
        },
        (error) => {
          console.log(' erreur de sauvegarde ! ' + error)
        })
  
    }


    
    getAppareilsToServer(){
      this.httpClient.get<any[]>('https://http-client-demo-27c5f.firebaseio.com/appareils.json') // on recupère les données envoyées au serveur
      .subscribe(
        (response) => {
          console.log(' enregistrement terminé')
          this.appareils = response
          this.emitAppareilSubject()
        },
        (error) => {
          console.log(' erreur de sauvegarde ! ' + error)
        })
  
    }


}