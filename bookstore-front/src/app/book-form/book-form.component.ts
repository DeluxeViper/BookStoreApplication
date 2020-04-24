import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: [
  ]
})
export class BookFormComponent implements OnInit {

  book = {
    title: "dummy title",
    description: "dummy description",
    unitCost: "123",
    isbn: "123-4535-356",
    nbOfPages: "456",
    Language: "English",
    imageURL: "http://ecx.images/I/51baRLwlufl._SL160_.jpg"
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  create(){
    this.router.navigate(['/book-list']);
  }

}
