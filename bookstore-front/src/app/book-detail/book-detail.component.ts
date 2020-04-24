import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import 'rxjs/Rx';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [
  ]
})
export class BookDetailComponent implements OnInit {

  book: any;

  // book = {
  //   title: "dummy title",
  //   description: "dummy description",
  //   unitCost:"123",
  //   isbn: "123-4535-356",
  //   nbOfPages: "456",
  //   Language:"English"
  // }
  constructor(private router: Router, private restService: RestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.restService.getBook(this.route.snapshot.params['id']).subscribe((data: {}) => {
    //   console.log(data);
    //   this.book = data;
    // });
    const id = +this.route.snapshot.params['bookId]'];
    this.book = this.restService.getBook(id);
    // this.route.params.map(params => params.bookId).switchMap(id => this.restService.getBook(id)).subscribe(book => this.book = book);
  }

  delete(){
    // this.restService.deleteBook(this.book.id)
    //   .finally(() => this.router.navigate(['/book-list'])).subscribe();
    this.router.navigate(['/book-list']);
  }

}
