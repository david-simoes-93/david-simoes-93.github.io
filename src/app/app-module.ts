import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { AboutMe } from './about-me/about-me';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Education } from './education/education';
import { Hobbies } from './hobbies/hobbies';
import { IndieDevCareer } from './indie-dev-career/indie-dev-career';
import { ProfessionalCareer } from './professional-career/professional-career';
import { ResearchingCareer } from './researching-career/researching-career';
import { SoftwareProjects } from './software-projects/software-projects';
import { WritingCareer } from './writing-career/writing-career';
import { Awards } from './awards/awards';
import { Navbar } from './navbar/navbar';
import { CareerCard } from './career-card/career-card';
import { MyPublications } from './my-publications/my-publications';
import { SafeUrlPipe } from './career-card/safe-url.pipe';


@NgModule({
  declarations: [
    App,
    AboutMe,
    Header,
    Footer,
    Education,
    Hobbies,
    IndieDevCareer,
    ProfessionalCareer,
    ResearchingCareer,
    SoftwareProjects,
    WritingCareer,
    Awards,
    Navbar,
    CareerCard,
    MyPublications,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }