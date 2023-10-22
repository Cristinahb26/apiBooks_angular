import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public formRecord: FormGroup;
  public user: User 
  confirmPassword: string = '';

  constructor(private formBuilder: FormBuilder, public userService: UserService, public router:Router) {
     this.buildForm()
  }

  public register(){
    const user = this.formRecord.value;
    console.log(user);
    
  }
  private buildForm(){

    const minPassLength = 8;

    this.formRecord = this.formBuilder.group({

       nombre: [, Validators.required],
       apellido: [, Validators.required],
       email: [, [Validators.required, Validators.email]],
       password: [, [Validators.required, Validators.minLength(minPassLength)]],
       confirmPassword: [,[Validators.required, Validators.minLength(minPassLength)]],

    });

  }

  registerUser() {

    this.user = new User(null, '', '', '', null, ''); // Inicializa un nuevo objeto User


    if (this.user.password == this.confirmPassword) {
      this.userService.register(this.user).subscribe(() => {
        console.log('Usuario registrado exitosamente');
         this.router.navigate(['/login']);
      });
    } else {
      console.log('Error al registrar el usuario');
    }
}
} 


