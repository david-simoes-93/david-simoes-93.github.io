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
      text: 'Best PhD Thesis Award 2019–20 in Artificial Intelligence: Winner.',
      fileLink: './assets/21 BestPhD.pdf',
      orgName: 'APPIA',
      orgLink:
        'https://www.appia.pt/2021/03/19/rede-appia-premio-melhor-tese-de-doutoramento-em-inteligencia-artificial-2019-2020-deadline-28-de-maio-de-2021/',
    },
    {
      text: '3D Soccer Simulation League: 6th place.',
      orgName: 'RoboCup 19',
      orgLink: 'https://2019.robocup.org/',
    },
    {
      text: '3D Soccer Simulation League: 3rd place.',
      orgName: 'ICARSC 19',
      orgLink: 'https://ewh.ieee.org/soc/ras/conf/technicallycosponsored/icarsc/2019/web.fe.up.pt/_icarsc2019/index-2.html',
    },
    {
      text: '2019 Micro-Rato: 2nd place in the MazeRunner category, 1st place in the Explorer category, and the "Best Robot" award.',
      fileLink: './assets/19 MicroRato.pdf',
      orgName: 'IEEE Student Branch from the University of Aveiro',
      orgLink: 'https://ieee.web.ua.pt/',
    },
    {
      text: '3D Soccer Simulation League: 3rd place.',
      orgName: 'RoboCup 18',
      orgLink: 'https://2018.robocup.org/',
    },
    {
      text: '3D Soccer Simulation League: 2nd place.',
      orgName: 'ICARSC 18',
      orgLink: 'https://robotica2018.festivalrobotica.pt/pt/icarsc',
    },
    {
      text: '2018 Micro-Rato: 2nd place in the MazeRunner category, and 1st place in the Explorer category.',
      fileLink: './assets/18 MicroRato.pdf',
      orgName: 'IEEE Student Branch from the University of Aveiro',
      orgLink: 'https://ieee.web.ua.pt/',
    },
    {
      text: '3D Soccer Simulation League: 7th place.',
      orgName: 'RoboCup 17',
      orgLink: 'https://2017.robocup.org/eng/index.html',
    },
    {
      text: '3D Soccer Simulation League: 2nd place.',
      orgName: 'ICARSC 17',
      orgLink: 'https://icarsc2017.isr.uc.pt/index.php/en/',
    },
    {
      text: '2017 BioRace Challenge, in Estarreja: 56th place.',
      fileLink: './assets/17 BioRace.pdf',
    },
    {
      text: '2017 Sunset Hackathon, on a Bosch sponsored project: 1st place.',
      fileLink: './assets/17 sunsetHackathon.pdf',
      orgName: 'HardWare City',
      orgLink: 'https://hardwarecity.org/',
    },
    {
      text: '3D Soccer Simulation League: 3rd place.',
      orgName: 'RoboCup 16',
      orgLink: 'https://2016.robocup.org/web/index-2.html',
    },
    {
      text: '3D Soccer Simulation League: 2nd place.',
      orgName: 'ICARSC 16',
      orgLink: 'http://icarsc2016.ipb.pt/',
    },
    {
      text: '2015 OpenMind competition: top 10.',
      orgName: 'ESEGUR',
      orgLink: 'https://trablisa.esegur.pt/',
    },
    {
      text: '2014/2015 Merit Grant: 18.8/20 GPA.',
      fileLink: './assets/14-15 Bolsa Merito.pdf',
      orgName: 'the University of Aveiro',
      orgLink: 'https://www.ua.pt/',
    },
    {
      text: '2015 Ciber-Rato: 1st place.',
      orgName: 'IEEE Student Branch from the University of Aveiro',
      orgLink: 'https://ieee.web.ua.pt/',
    },
    {
      text: "2010 Best Student Prize 'Dr. António Cláudio': 1st place.",
      fileLink: './assets/10 AntonioClaudio.jpg',
      orgName: 'the Municipality of Almeirim',
      orgLink: 'https://www.cm-almeirim.pt/',
    },
    {
      text: "2009 RALLY@MATIC: 1st place.",
      orgName: 'the Secondary School "Marquesa da Alorna"',
      orgLink: 'https://ecoescolas.abaae.pt/escola/escola-secundaria-marquesa-de-alorna/',
    },
    {
      text: '2008 ETC Website Story: 1st place.',
      orgName: 'the English Theatre Company',
      orgLink: 'http://www.englishtheatrecompany.co.uk/',
    },
    {
      text: '2007 Canguru Matemático Sem Fronteiras Contest: 1st regional place, 27th national place.',
      orgName: 'the Sociedade Portuguesa de Matemática',
      orgLink: 'https://portal.spm.pt/',
    },
  ];
}
