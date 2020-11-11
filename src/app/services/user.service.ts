import {User} from '../models/User.model'
import {Subject} from 'rxjs/Subject'
export class UserService {
    private users: User[] = [
        {
          firstName: 'luidgi',
          lastName: 'Clairboy',
          email: 'luidgi@live.fr',
          drinkPreference: 'Coca',
          hobbies: [
            'coder',
            'sport',
            'cinema'
          ]
        }
      ]
    userSubject = new Subject<User[]>()

    emitUsers(){
        this.userSubject.next(this.users.slice())
    }

    addUser(user: User){
        this.users.push(user)
        this.emitUsers()
    }
}