export class AppareilService{

    appareils=[
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Xbox',
          status: 'éteint'
        },
        {
          name: 'Téléviseur',
          status: 'allumé'
        }
      ]

    switchOnAll (){
        for(let appareil of this.appareils){
            appareil.status = 'allumé'
        }
    }

    switchOffAll (){
        for(let appareil of this.appareils){
            appareil.status = 'éteint'
        }
    }

    SwitchOnOne ( index: number){
            this.appareils[index].status = 'allumé'
    }
    

    SwitchOffOne ( index: number){
            this.appareils[index].status = 'éteint'
    }


}