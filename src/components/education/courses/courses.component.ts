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
  @Input() certificate!: String;
  @Input() id!: String;

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  switchShow(){
    this.show = !this.show;
  }

}
