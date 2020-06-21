import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  books: Book[];

  constructor() {
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
    ];
  }

  getAll(): Book[] {
    return this.books;
  }

  getSingle(isbn: string): Book {
    return this.books.find(book => book.isbn === isbn);
  }
}
