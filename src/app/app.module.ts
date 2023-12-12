import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { AppComponent } from './app.component';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';

import { ExperienceCardComponent } from 'src/components//works/experience-card/experience-card.component';
import { AboutMeComponent } from 'src/components/about-me/about-me.component';
import { TechnologiComponent } from 'src/components/technologi/technologi.component';
import { WorksComponent } from 'src/components/works/works.component';
import { ProjectsGalleryComponent } from 'src/components/projects-gallery/projects-gallery.component';
import { ProjectComponent } from 'src/components/projects-gallery/project/project.component';
import { EducationComponent } from 'src/components/education/education.component';
import { CoursesComponent } from 'src/components/education/courses/courses.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    ExperienceCardComponent,
    AboutMeComponent,
    TechnologiComponent,
    WorksComponent,
    ProjectsGalleryComponent,
    ProjectComponent,
    EducationComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
