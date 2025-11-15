export interface ServiceType {
  id: string;
  imageUrl: string;
  name: {
    en: string;
    ru: string;
    tm: string;
  };
  parentId: null | string;
  services: OneSeparateService[];
}

export interface OneSeparateService {
  id: string;
  imageSmall: null | string;
  name_en: string;
  name_ru: string;
  name_tm: string;
  description_en: string;
  description_ru: string;
  description_tm: string;
  fields: {
    id: string;
    label_en: string;
    label_ru: string;
    label_tm: string;
    multiple: boolean;
    priority: number;
    required: boolean;
    serviceId: string;
    type: string;
    options: [];
  }[];
}
