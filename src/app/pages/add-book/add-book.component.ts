import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
   
  public books: Book[];

  constructor(public bookService: BooksService, public router:Router) {
  
    this.bookService.getAll();
    
  } 

  addBook(id_book:number, title:string, type:string, author:string, price:number, photo:string) {

    let newBook = new Book(title, type, author, price, photo, id_book);
    this.bookService.addBook(newBook).subscribe((data:Book[]) => {
       this.books = data;
    });
    this.router.navigate(['/books']);

  } 

}