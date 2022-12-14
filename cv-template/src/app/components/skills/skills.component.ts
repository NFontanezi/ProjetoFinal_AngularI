import { Component, Input } from '@angular/core';
import { SkillsSectionData } from 'src/app/models/skills-section-data.models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  @Input() public skillData!: SkillsSectionData;
}
