import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

     public user: User = new User(null, '', '', '', '', null)


  constructor(public userService: UserService){

    }

   public enviar(name:string, last_name:string, email:string, photo:string){

      this.user.name = name;
      this.user.last_name = last_name;
      this.user.email = email;
      this.user.photo = photo;
      

   /* Llamar al servicio para actualizar el perfil */
   this.userService.edit(this.user).subscribe(() => {
      console.log('Perfil modificado exitosamente');
     })
  }
}
