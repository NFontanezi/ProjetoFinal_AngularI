import { EducationSectionData } from './education-section-data.model';
import { ExperienceSectionData } from "./experience-section-data.models";


export interface AppData {
  experiences: ExperienceSectionData;
  educations: EducationSectionData;
}
