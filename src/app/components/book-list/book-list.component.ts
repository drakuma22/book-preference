import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: any;

  constructor(private booksService: BookService){}

  ngOnInit(){
    this.booksService.getBooks().subscribe(data => {
      this.books = Object.values(data.books)
    })
  }
  
}
