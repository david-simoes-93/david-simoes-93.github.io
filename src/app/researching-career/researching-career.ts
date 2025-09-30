import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-researching-career',
  templateUrl: './researching-career.html',
  styleUrl: './researching-career.css',
  standalone: false,
})
export class ResearchingCareer implements OnInit {
  intellwheelItems: SafeHtml[] = [];
  fcportugalItems: SafeHtml[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.intellwheelItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'Robotics Researcher for <a href="www.ieeta.pt/index.php/project/intellwheels-2-0-intelligent-wheelchair-with-flexible-multimodal-interface-and-realistic-simulator/" target="_blank">Intellwheels 2.0</a> (2019-2020): A smart wheelchair with a multi-modal interface and realistic simulator, based on ROS1. Worked on the simulator and navigation modules of the chair, reverse engineering its controller and integrating it as a ROS module. Migrated a SLAM ROS package from ROS1 to ROS2.'
      ),
    ];

    this.fcportugalItems = [
      this.sanitizer.bypassSecurityTrustHtml(
        'Robotics Researcher for the <a href="http://robocup-portugal.sprobotica.pt/active_teams.html" target="_blank">FCPortugal 3D Soccer Simulation League</a> (2016-2020): A simulated team with 11 humanoid agents that act upon their joints to play a soccer match against an enemy team, relying solely on local observations of the field state. Worked on low-level behavior optimization (like kicking and running motions), as well as high-level strategy formation (for keep-away soccer or competition matches). Was also a member of the Organizing and Maintenance Committees for the league.'
      ),
    ];
  }
}