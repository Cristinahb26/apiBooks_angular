import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public form_login: FormGroup;
  public user: User;

  constructor(private userService: UserService, public router: Router) {}

  ngOnInit(){
    
    let minPassLength = 8;

    this.form_login = new FormGroup({

      'email': new FormControl (null, [Validators.required, Validators.email]),
      'password': new FormControl (null, [Validators.required, Validators.minLength(minPassLength)])
    
    })

  }

  iniciarSesion(){

    let email = this.form_login.get('email').value;
    let password = this.form_login.get('password').value;

    this.user = new User (0, "", "", email, "", password)

    console.log(email);
    console.log(password);

    this.userService.login(this.user).subscribe((data) => {
      
      console.log(data);
      
      if (data) {
      
        this.userService.logueado = true;
        this.userService.user = data[0];
        this.router.navigate(['/books']);

      } else {
        console.log('Los datos de inicio de sesión no son correctos');
      }
    });
}
}
