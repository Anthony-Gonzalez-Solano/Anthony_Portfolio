import { Component, OnInit,Input } from '@angular/core';

declare var window:any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() title!: String;
  @Input() date!: String;
  @Input() images!: any[]; 
  @Input() technologie!: String[]; 
  @Input() description!: String;
  @Input() gitlikn!: String; 
  @Input() id!: String;

  modal:any;

  constructor() { }

  ngOnInit() {
  }
}

