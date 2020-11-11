import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/User.model'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup
  constructor( private formBuilder : FormBuilder, private userService: UserService, private router: Router) { } // Form Builder classe qui permet de créer des formulaires 

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.userForm = this.formBuilder.group( // model du formulaire
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        drinkPreference: ['', Validators.required],
        hobbies: this.formBuilder.array([])
      }
    )
  }

  onSubmitForm(){
    const formValue = this.userForm.value
    const newUser = new User (
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []  // vérifie si le formulaire existe pour le hobbie car il nest pas obligatoire
    )
    this.userService.addUser( newUser)
    this.router.navigate( ['/users'])
  }

  getHobbies(){
    return this.userForm.get('hobbies') as FormArray // retourne les valeur sous forme de tableau
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control('', Validators.required)
    this.getHobbies().push(newHobbyControl)
  }

}
