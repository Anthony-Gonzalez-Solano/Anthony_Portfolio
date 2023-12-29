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

  selectTech(tech: String): String {
    switch(tech){
      case 'angular':
        return '../../../assets/icons/angular.svg';
      case 'react':
        return '../../../assets/icons/react.svg';
      case 'redux':
        return '../../../assets/icons/redux.svg';
      case 'express':
        return '../../../assets/icons/express.svg';
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
      case 'mongodb':
        return '../../../assets/icons/mongo.svg';
      case 'docker':
        return '../../../assets/icons/docker.svg';
      case 'bootstrap':
        return '../../../assets/icons/bootstrap.svg';
      default:
        return 'no encontrado';
    }
  }

}
