import { LanguageSectionData } from './language-section-data.models';
import { InfoSectionData } from "./info-section-data.models";
import { CodingSectionData } from './coding-section-data';

export interface AsideData{
    dados:InfoSectionData,
    languages: LanguageSectionData,
    coding: CodingSectionData
}
