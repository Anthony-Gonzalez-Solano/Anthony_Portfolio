import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  @Input() rol!: String;
  @Input() company!: String;
  @Input() technologies!: String[];
  @Input() description!: String;
  @Input() month!: String;
  @Input() extended!: Boolean;


  show: boolean = false;
  description_preline: string = '';

  constructor() { }

  ngOnInit() {
    if(this.extended == true){
      this.show = true;
    }
  }

  showSwitch() {
    this.show = !this.show;
  }

}
