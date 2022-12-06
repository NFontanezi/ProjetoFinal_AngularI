import { EducationSectionData } from './../../models/education-section-data.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  @Input() public educationData!: EducationSectionData;

}
