import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

     public books: Book[] = [];

     constructor(public bookService: BooksService, public userService: UserService){
      this.bookService.getAll().subscribe((data: any) => {
        this.books = data;
       
      });
  
    }
    search(id_book: number) {
      if (id_book !== 0) {
        
        this.bookService.getOne(this.userService.user.id_user, id_book).subscribe((data: any) =>{
                 this.books = data.data;
                 console.log(data);
                 
           });
      } else {
        this.bookService.getAll().subscribe((data: any) => {
          this.books = data.data;
          console.log(data);
          
        });
      }
    }
    
    deleteCard(id_book: number) {
  
    if (id_book) {
      this.bookService.delete(id_book).subscribe(() => {
        this.books = this.books.filter(book => book.id_book !== id_book); 
      });
    }
  }   
}
