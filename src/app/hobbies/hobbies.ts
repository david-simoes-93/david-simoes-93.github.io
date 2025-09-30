import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.html',
  styleUrls: ['./hobbies.css'],
  standalone: false,
})
export class Hobbies {
  hobbies = [
    {
      title: 'Food Blog',
      description:
        'All the foods that the Wife and I have eaten across the globe.',
      linkText: 'WordPress',
      link: 'https://davidsimoesfood.wordpress.com/',
      embed: `<iframe src="https://davidsimoesfood.wordpress.com/caroussel/" frameborder="0"></iframe>`,
    },
    {
      title: 'Book Worm',
      description: 'Check out my library!',
      linkText: 'Dropbox',
      link: 'https://www.dropbox.com/scl/fo/enfsavuyqljv7qtxmd3z0/APWFsfzZ463IMsK8cO56Wlo?rlkey=216sny1ud0evgi6mzi3rxwhhi&dl=0',
    },
    {
      title: 'YouTuber',
      description: 'Travel VLOGs, D&D campaigns, and others.',
      linkText: 'Profile',
      link: 'https://www.youtube.com/bluemoon93',
      embed: `<iframe src="https://www.youtube.com/embed/videoseries?list=PL90F080D403208288" frameborder="0" allowfullscreen></iframe>`,
    },
    {
      title: 'StackExchange',
      description:
        'Participant of the RPG, Movies&TV, and StackOverflow communities.',
      linkText: 'Profile',
      link: 'https://stackexchange.com/users/2293919/bluemoon93',
    },
    {
      title: 'Gamer',
      description: 'Big fan of all games, except for sports stuff.',
      linkText: 'Steam Profile',
      link: 'https://steamcommunity.com/id/bluemoon93',
      image: 'img/hobbies/pokemon-gen4-top3.png',
    },
  ];
}
