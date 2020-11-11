import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component'
import {RouterModule, Routes} from "@angular/router"
import { AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component'
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
   {path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent},
   {path: 'new-user', component: NewUserComponent},
   {path: 'auth', component: AuthComponent},
   {path: 'users', canActivate:[AuthGuard], component: UserListComponent}, // canActivate indique qu'il faut etre authentifié pour acceder à cette route
   {path: 'edit', canActivate:[AuthGuard],  component: EditAppareilComponent},
   {path: 'appareils/:id', canActivate:[AuthGuard],  component: SingleAppareilComponent},
   {path: '', canActivate:[AuthGuard], component: AppareilViewComponent},
   {path: 'not-found', component: FourOhFourComponent},
   {path: '**', redirectTo: '/not-found'} // toujour mettre a la fin des routes
]
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule, // pour utiliser les formulaires réactifs
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // dit au module routeur d'angular que toutes les roiutes se trouve dans cette constante
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
