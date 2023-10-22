import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url: string = "http://localhost:3000/book";
  private url1: string = "http://localhost:3000/bookId";

  constructor(private http: HttpClient, public userService: UserService) {
    
  }
   getAll(){

    return this.http.get(this.url + '?id_user=' + this.userService.user.id_user);
    
  }
   getOne(id_user: number, id_book:number){

    return this.http.get(this.url1 + '?id_user=' + id_user + '&id_book=' + id_book);

  }
   addBook(book:Book){

    return this.http.post(this.url, book);

   }
   edit(book:Book){

    return this.http.put(this.url, book);

   }
   delete(id_book:number){
    
    return this.http.request( 'delete', this.url, { body: {id_book:id_book} } );


   }
}

