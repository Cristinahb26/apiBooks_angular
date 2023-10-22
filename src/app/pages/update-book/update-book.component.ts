import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public books: Book[];

  constructor(public bookService: BooksService, public router:Router){

     this.bookService.getAll().subscribe((data: Book[]) => {
       this.books = data;
     });
  }

  editar(title:string, type:string, author:string, price:number, photo:string, id_book:number){

    let book = new Book (title, type, author, price, photo, id_book)
    this.bookService.edit(book).subscribe((data: Book[]) => {
       console.log(data);
       
    });
    this.router.navigateByUrl('/books');
  }

}