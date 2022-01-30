import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCartComponent } from './components/book-cart/book-cart.component';



@NgModule({
  declarations: [
    BookCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BookCartComponent]
})
export class BookModule { }
