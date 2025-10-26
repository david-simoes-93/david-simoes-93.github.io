import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-writing-career',
  templateUrl: './writing-career.html',
  styleUrls: ['./writing-career.css'],
  standalone: false,
})
export class WritingCareer implements OnInit {
  descentItems: SafeHtml[] = [];
  tyrannyItems: SafeHtml[] = [];
  deicideItems: SafeHtml[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.descentItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'A high-level (16-20) adaptation of D&D\'s <a href="https://forgottenrealms.fandom.com/wiki/Baldur%27s_Gate:_Descent_into_Avernus" target="_blank">Descent into Avernus</a> campaign.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Contains:<br>' +
        '<p>Colored maps for all scenarios of the adventure</p>' +
        "<p>Expanded lore for Lulu's visions/memories/dreams of the past</p>" +
        '<p>Expanded lore and information on Elturel, Tiamat\'s Lair, and other NPCs</p>' +
        '<p>Balance changes for every chapter, such that they are applicable to Tier 4 play</p>' +
        '<p>Suggestions and tips for running each chapter</p>' +
        '<p>Anything else that I thought could be useful running Descent into Avernus</p>'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Available on <a href="https://www.dmsguild.com/product/464926/" target="_blank">DM\'s Guild</a>.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'All profits are donated to <a href="https://www.doctorswithoutborders.org/" target="_blank">Doctors Without Borders</a>.'
      ),
    ];

    this.tyrannyItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'A companion book to D&D\'s <a href="https://forgottenrealms.fandom.com/wiki/Tyranny_of_Dragons" target="_blank">Tyranny of Dragons</a> campaign.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Contains:<br>' +
        '<p>Colored maps for all scenarios of the adventure</p>' +
        "<p>New adventures in Elturel, Baldur's Gate, On The Road, Thay, and Council of Dragons</p>" +
        '<p>Expanded lore and information on Cities, the Order of the Dragon, and other NPCs</p>' +
        '<p>Advice and balance changes for every chapter</p>' +
        '<p>Suggestions and tips for running each chapter</p>' +
        '<p>Anything else that could be useful running Tyranny of Dragons</p>'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Available on <a href="https://www.dmsguild.com/product/437637/" target="_blank">DM\'s Guild</a>.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'All profits are donated to <a href="https://www.doctorswithoutborders.org/" target="_blank">Doctors Without Borders</a>.'
      ),
    ];

    this.deicideItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'A D&D homebrew 1-20 level campaign. Hundreds of years after the beginning of D&D 5th Edition, involving the Overgod Ao trapped inside an artifact, mythical artifacts, crime lords, and multiple planes.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Characters learn about missing Gods, the Wand of Wonders, and crime lord Kaiser Soze. They can ally with the crime lord or release the Gods for themselves.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'Available on <a href="https://www.dmsguild.com/product/388847/" target="_blank">DM\'s Guild</a>.'
      ),
      this.sanitizer.bypassSecurityTrustHtml(
        'All profits are donated to <a href="https://www.doctorswithoutborders.org/" target="_blank">Doctors Without Borders</a>.'
      ),
    ];
  }
}
