import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.html',
  styleUrls: ['./awards.css'],
  standalone: false,
})
export class Awards {
  awards = [
    {
      text: 'Best PhD Thesis Award 2019–20 in Artificial Intelligence by APPIA: Winner.',
      fileLink: './assets/21 BestPhD.pdf',
      orgLink:
        'https://www.appia.pt/2021/03/19/rede-appia-premio-melhor-tese-de-doutoramento-em-inteligencia-artificial-2019-2020-deadline-28-de-maio-de-2021/',
    },
    {
      text: '3D Soccer Simulation League, RoboCup 19: 23rd RoboCup International Competition and Symposium: 6th place.',
    },
    {
      text: '3D Soccer Simulation League, ICARSC 19: 19th IEEE International Conference on Autonomous Robot Systems and Competition: 3rd place.',
    },
    {
      text: '2019 Micro-Rato by IEEE Student Branch from the University of Aveiro: 2nd place in the MazeRunner category, 1st place in the Explorer category, and the "Best Robot" award.',
      fileLink: './assets/19 MicroRato.pdf',
    },
    {
      text: '3D Soccer Simulation League, RoboCup 18: 22nd RoboCup International Competition and Symposium: 3rd place.',
    },
    {
      text: '3D Soccer Simulation League, ICARSC 18: 18th IEEE International Conference on Autonomous Robot Systems and Competitions: 2nd place.',
    },
    {
      text: '2018 Micro-Rato by IEEE Student Branch from the University of Aveiro: 2nd place in the MazeRunner category, and 1st place in the Explorer category.',
      fileLink: './assets/18 MicroRato.pdf',
    },
    {
      text: '3D Soccer Simulation League, RoboCup 17: 21st RoboCup International Competition and Symposium: 7th place.',
    },
    {
      text: '3D Soccer Simulation League, ICARSC 17: 17th IEEE International Conference on Autonomous Robot Systems and Competitions: 2nd place.',
    },
    {
      text: '2017 BioRace Challenge, in Estarreja: 56th place.',
      fileLink: './assets/17 BioRace.pdf',
    },
    {
      text: '2017 Sunset Hackathon by HardWare City, on a Bosch sponsored project: 1st place.',
      fileLink: './assets/17 sunsetHackathon.pdf',
    },
    {
      text: '3D Soccer Simulation League, RoboCup 16: 20th RoboCup International Competition and Symposium: 3rd place.',
    },
    {
      text: '3D Soccer Simulation League, ICARSC 16: 16th IEEE International Conference on Autonomous Robot Systems and Competitions: 2nd place.',
    },
    {
      text: '2015 OpenMind competition, by ESEGUR: top 10.',
    },
    {
      text: '2014/2015 Merit Grant by the University of Aveiro: 18.8/20 GPA.',
      fileLink: './assets/14-15 Bolsa Merito.pdf',
    },
    {
      text: '2015 Ciber-Rato by IEEE Student Branch from the University of Aveiro: 1st place.',
    },
    {
      text: "2010 Best Student Prize 'Dr. António Cláudio' by the Municipality of Almeirim: 1st place.",
      fileLink: './assets/10 AntonioClaudio.jpg',
    },
    {
      text: "2009 RALLY@MATIC by the Secondary School 'Marquesa da Alorna': 1st place.",
    },
    {
      text: '2008 ETC Website Story by the English Theatre Company: 1st place.',
    },
    {
      text: '2007 Canguru Matemático Sem Fronteiras Contest by the Sociedade Portuguesa de Matemática: 1st regional place, 27th national place.',
    },
  ];
}
