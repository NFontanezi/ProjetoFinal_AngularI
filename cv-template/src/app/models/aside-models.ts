import { ProfileSectionData } from './profile-section-data.models';
import { ContactInfoData } from './contactinfo-data.model';
import { LanguageSectionData } from './language-section-data.models';
import { InfoSectionData } from "./info-section-data.models";
import { CodingSectionData } from './coding-section-data';
import { KnowledgeSectionData } from './knowledge-section-data.models';

export interface AsideData{
    profile: ProfileSectionData,
    dados:InfoSectionData,
    knowledge: KnowledgeSectionData,
    languages: LanguageSectionData,
    contactInfo: ContactInfoData,
    coding: CodingSectionData,

}
