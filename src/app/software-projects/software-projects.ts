import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-software-projects',
  templateUrl: './software-projects.html',
  styleUrls: ['./software-projects.css'],
  standalone: false,
})
export class SoftwareProjects implements OnInit {
  arcadePiItems: SafeHtml[] = [];
  blueSkyItems: SafeHtml[] = [];
  imdbIndexerItems: SafeHtml[] = [];
  igdbIndexerItems: SafeHtml[] = [];
  microEeveeItems: SafeHtml[] = [];
  smartOliItems: SafeHtml[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.arcadePiItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'An arcade system to play MS-DOS, Sega, Win98, GameBoy, or any other videogame using arcade controllers and a DIY arcade station.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Open-sourced on <a href="https://github.com/david-simoes-93/ArcadePi" target="_blank">GitHub</a>.'
      ),
    ];

    this.blueSkyItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'A BlueSky bot that fact-checks when tagged, using an underlying LLM.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Open-sourced on <a href="https://github.com/david-simoes-93/BlueSkyFactCheckerAI" target="_blank">GitHub</a>.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Visit the bot <a href="https://bsky.app/profile/factcheckerai.bsky.social" target="_blank">here</a>.'
      ),
    ];

    this.imdbIndexerItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'A Java media management system to create lists of movies, series, cartoons, and anything else from IMDB and OMDB.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Open-sourced on <a href="https://github.com/david-simoes-93/IMDBIndexer" target="_blank">GitHub</a>.'
      ),
    ];

    this.igdbIndexerItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'A Python media management system to create lists of videogames from IGDB.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Open-sourced on <a href="https://github.com/david-simoes-93/IgdbIndexer" target="_blank">GitHub</a>.'
      ),
    ];

    this.microEeveeItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'A DIY robotic Pokémon to participate in the Micro-Mouse competition, as well as the simulated agent for the Ciber-Mouse competition.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Open-sourced on <a href="https://github.com/david-simoes-93/MicroEEVEE" target="_blank">GitHub</a>.'
      ),
    ];

    this.smartOliItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'An OLI-integrated smart toilet, that detects users, allows for hands-off interaction, flushes appropriately, is integrated with Smartphone Assistants and SmartHouse systems, and has maintenance feedback and automatic filter cleaning protocols.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Open-sourced on <a href="https://github.com/david-simoes-93/SmartOLI" target="_blank">GitHub</a>.'
      ),
    ];
  }
}
