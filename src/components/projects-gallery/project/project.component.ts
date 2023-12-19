import { Component, OnInit,Input } from '@angular/core';

declare var window:any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() title!: String;
  @Input() images!: any[]; 
  @Input() technologie!: String[]; 
  @Input() description!: String;
  @Input() little_description!:String;
  @Input() gitlink!: String;
  @Input() link!: String;
  @Input() id!: String;

  modal:any;

  constructor() { }

  ngOnInit() {
  }

  openNewTab(link: String) {
    window.open(link, '_blank');
  }

  selectTech(tech: String): String {
    switch(tech){
      case 'angular':
        return '../../../assets/icons/angular.svg';
      case 'react':
        return '../../../assets/icons/react.svg';
      case 'redux':
        return '../../../assets/icons/redux.svg';
      case 'express':
        return '../../../assets/icons/expresjs.svg';
      case '.net':
        return '../../../assets/icons/dotnet.svg';
      case 'django':
        return '../../../assets/icons/django.svg';
      case 'mssql':
        return '../../../assets/icons/mssql.svg';
      case 'mysql':
        return '../../../assets/icons/mysql.svg';
      case 'postgresql':
        return '../../../assets/icons/postgresql.svg';
      case 'kotlin':
        return '../../../assets/icons/kotlin.svg';
      default:
        return 'no encontrado';
    }
  }
}

