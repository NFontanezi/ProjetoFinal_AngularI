import { ContactInfoData } from './contactinfo-data.model';
import { LanguageSectionData } from './language-section-data.models';
import { InfoSectionData } from "./info-section-data.models";

export interface AsideData{
    dados:InfoSectionData,
    languages: LanguageSectionData
    contactinfo: ContactInfoData
}
