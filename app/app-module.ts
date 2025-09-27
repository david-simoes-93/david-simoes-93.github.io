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
import { IndieDevCarrer } from './indie-dev-carrer/indie-dev-carrer';
import { ProfessionalCarrer } from './professional-carrer/professional-carrer';
import { ResearchingCarrer } from './researching-carrer/researching-carrer';
import { SoftwareProjects } from './software-projects/software-projects';
import { WritingCarrer } from './writing-carrer/writing-carrer';
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
    IndieDevCarrer,
    ProfessionalCarrer,
    ResearchingCarrer,
    SoftwareProjects,
    WritingCarrer,
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