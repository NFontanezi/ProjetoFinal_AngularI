import { Component, OnInit } from '@angular/core';
import { ExperienceSectionData } from 'src/app/models/experience-section-data.models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  public firstExperience: ExperienceSectionData = {
    job: "Trainee Top Coder",
    company: "Banco Safra",
    timePeriod: "jun/2022 - atual",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nemo, quibusdam optio a, blanditiis ex amet libero fugiat, consequuntur dolores ut veritatis accusantium necessitatibus cupiditate."
  }

  public secondExperience: ExperienceSectionData = {
    job: "Estudante",
    company: "Ada - Let's Code",
    timePeriod: "mai/2022 - atual",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nemo, quibusdam optio a, blanditiis ex amet libero fugiat, consequuntur dolores ut veritatis accusantium necessitatibus cupiditate."
  }

  constructor() { }

  ngOnInit() {
  }

}
