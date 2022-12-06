import { Component, Input, OnInit } from '@angular/core';
import { ExperienceSectionData } from 'src/app/models/experience-section-data.models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
  @Input() public experienceData!: ExperienceSectionData;


  constructor() { }

  ngOnInit() {
  }

}
