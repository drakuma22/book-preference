import { Component, Input, ViewEncapsulation} from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookListItemComponent {

  @Input() book: Book = {
    id: '',
    title: '',
    author: '',
    description: ''
  }

}
