import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
// import { BookService, Book } from '../service';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  nbBooks: number;
  books: any;

  constructor(private restService: RestService) {}
  ngOnInit(): void {
    this.restService.getBooks().subscribe(books => this.books = books);
    this.restService.countBooks().subscribe(nbBooks => this.nbBooks = nbBooks);
  }

}
