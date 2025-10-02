import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-indie-dev-career',
  templateUrl: './indie-dev-career.html',
  styleUrls: ['./indie-dev-career.css'],
  standalone: false,
})
export class IndieDevCareer implements OnInit {
  chronoItems: SafeHtml[] = [];
  lichQueenItems: SafeHtml[] = [];
  babelMmoItems: SafeHtml[] = [];
  unrealizedItems: { title: string; items: SafeHtml[] }[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.chronoItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'Puzzle Platformer Game: Sole developer of the a puzzle platformer videogame, planning, designing, and developing the entire project across the full stack. Tasks included designing all the puzzles, implementing game logic, refining the overall look and feel of the game, testing, maintaining, and publishing it.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'The game is currently available on <a href="https://store.steampowered.com/app/3015650/Chrono/" target="_blank">Steam</a>, <a href="https://store.epicgames.com/en-US/p/chrono-909256" target="_blank">Epic Games</a>, and <a href="https://bluemoon93.itch.io/chrono" target="_blank">itch.io</a>.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Related news articles: <a href="https://www.actigamer.pt/noticias/chrono-e-o-novo-jogo-de-puzzles-3d-portugues-inspirado-em-portal/" target="_blank">ActiGamer</a>, <a href="https://www.gamingonlinux.com/2024/11/chrono-is-a-puzzler-about-time-controlling-objects-in-the-world/" target="_blank">Gaming On Linux</a>, <a href="https://www.meusjogos.pt/2025/01/chrono.html" target="_blank">Meus Jogos</a>'
      ),
    ];

    this.lichQueenItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'Action RPG: Lead developer of an RPG videogame where the player controls a necromancer who builds an army to conquer the world. Part of a team that submitted the game to <a href="https://itch.io/jam/game-off-2023/rate/2398741" target="_blank">Game Off 2023</a>. Responsible for developing most of the codebase, and designing or refining the game systems and behaviors.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'The game is currently available on <a href="https://bluemoon93.itch.io/the-lich-queen" target="_blank">itch.io</a>.'
      ),
    ];

    this.babelMmoItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'Online Cooperative Role-Playing Game: Sole developer on an online role-playing videogame, planning, designing, and developing the entire project across the full stack. Tasks included implementing networking layers, game logic, and artificial intelligence for enemies; designing classes, creatures, game structure, and overall look and feel of the game; testing, maintaining, publishing, and creating a demonstration teaser with multiple players playing remotely.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'A proof-of-concept is <a href="https://github.com/david-simoes-93/babel-mmo" target="_blank">open-sourced</a> and playable, showcasing a demo with 3 unique classes and 3 unique enemies, using a client-server architecture.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'The game is currently available on <a href="https://bluemoon93.itch.io/babel" target="_blank">itch.io</a>.'
      ),
    ];

    this.unrealizedItems = [
      {
        title: 'SC6',
        items: [
          this.sanitizer.bypassSecurityTrustHtml(
            'A 3D remake of SC4. The goal is to allow larger maps and move to 3D from the isometric perspective (imagine those flying missions but with a GTA kind-of feel!). Better systems (inspiration from SC4 mods), more systems (tourism, scalable buildings, etc), finer control (a road segment occupies 4x4, sidewalks can be larger or smaller, etc).'
          ),
        ],
      },
      {
        title: 'Cards Across the Multiverse',
        items: [
          this.sanitizer.bypassSecurityTrustHtml(
            'An online card-game where players unlock and play with pre-made decks, organized by ranks (from A to F...). Decks belong to different trading card games, like MTG, YGO, HS, and all work under the same ruleset. Values are adjusted for balance (YGO decks divide all life points by 40, for example).'
          ),
        ],
      },
    ];
  }
}
