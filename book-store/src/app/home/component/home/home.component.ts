import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  books: BookModel[];

  ngOnInit(): void {
    this.books = [];
    let book = new BookModel();
    book.id = 1;
    book.name = "Revolution twenty 20";
    book.price = 200;
    book.author = "Chetan Bhagat";
    book.imgSrc = "https://images-na.ssl-images-amazon.com/images/I/711tJ6aX-SL.jpg";
    this.books.push(book);

    let book2 = new BookModel();
    book2.id = 2;
    book2.name = "One Arranged Marriage Murder";
    //book2.price = 400;
    book2.author = "Chetan Bhagat";
    book2.imgSrc = "https://5.imimg.com/data5/SELLER/Default/2020/12/NL/CY/OG/119601269/chetan-bhagat-books-500x500.jpg";
    this.books.push(book2);
  }

}
