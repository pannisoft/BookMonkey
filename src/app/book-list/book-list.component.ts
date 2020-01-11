import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  ngOnInit() {
    this.books = [
      {
        isbn: '11111111',
        title: 'Angular',
        authors: ['Fred', 'Horst', 'Peter'],
        published: new Date(2020, 1, 1),
        subtitle: 'Grundlagen',
        rating: 5,
        thumbnails: [{
          url: 'https://ng-buch.de/buch1.jpg',
          title: 'Buchcover'
        }],
        description: 'Ein sehr gutes Buch'
      },
      {
        isbn: '22222222',
        title: 'Bla',
        authors: ['Dieter', 'Klaus', 'Peter'],
        published: new Date(2030, 5, 5),
        subtitle: 'Fortgeschrittene',
        rating: 3,
        thumbnails: [{
          url: 'https://ng-buch.de/buch2.jpg',
          title: 'Buchcover'
        }],
        description: 'Ein sehr mieses Buch'
      }
    ]
  }

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }
}
