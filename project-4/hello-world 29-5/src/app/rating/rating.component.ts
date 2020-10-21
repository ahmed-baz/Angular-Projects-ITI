import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
 @Input() stars:number=0;
 @Output() starsChanged=new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }
  changeRating()
  {
    this.stars=10;
    this.starsChanged.emit(this.stars);
  }

}
