import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() degree!: String;
  @Input() institute!: String;
  @Input() date!: String;

  constructor() { }

  ngOnInit() {
  }

}
