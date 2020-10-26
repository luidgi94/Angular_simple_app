import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean
  constructor( private authService : AuthService) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth
  }

  onSignIn(){
    this.authService.signIn().then(
      ()=> {
        console.log('connexion reussie')
        this.authStatus = this.authService.isAuth
      }
    )
  }

  onSignOut(){
    this.authService.signOut()
    console.log('déconnexion reussie')
    this.authStatus = this.authService.isAuth
  }

}
