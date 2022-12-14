import { SkillsData } from './skills-data.models';
import { HeaderData } from './header-data.model';
import { AsideData } from './aside-models';
import { EducationSectionData } from './education-section-data.model';
import { ExperienceSectionData } from "./experience-section-data.models";
import { SkillsSectionData } from './skills-section-data.models';



export interface AppData {
  skills: SkillsSectionData;
  experiences: ExperienceSectionData;
  educations: EducationSectionData;
  aside: AsideData;
  header: HeaderData;

}
