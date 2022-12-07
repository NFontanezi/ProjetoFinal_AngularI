import { ContactInfoData } from './contactinfo-data.model';
import { ContactInfoData } from './contactinfo-data.model';
import { LanguageSectionData } from './language-section-data.models';
import { InfoSectionData } from "./info-section-data.models";
import { CodingSectionData } from './coding-section-data';

export interface AsideData{
    dados:InfoSectionData,
<<<<<<< HEAD
    languages: LanguageSectionData,
    coding: CodingSectionData
=======
    languages: LanguageSectionData
    contactinfo: ContactInfoData
>>>>>>> f388005088bc9f70050154a830250c0b3cb4b9f5
    contactinfo: ContactInfoData
}
