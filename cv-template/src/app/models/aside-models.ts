import { ProfileSectionData } from './profile-section-data.models';
import { ContactInfoData } from './contactinfo-data.model';
import { LanguageSectionData } from './language-section-data.models';
import { InfoSectionData } from "./info-section-data.models";
import { CodingSectionData } from './coding-section-data';

export interface AsideData{
    profile: ProfileSectionData,
    dados:InfoSectionData,
    languages: LanguageSectionData,
    contactInfo: ContactInfoData,
    coding: CodingSectionData,

}
