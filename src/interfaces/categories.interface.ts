export interface Category {
  id: string;
  imageUrl: string | null;
  createdAt: string;
  createdBy: string;
  isActive: boolean;
  name: {
    en: string;
    ru: string;
    tm: string;
  };
  parentId: string;
  priority: number;
  type: string;
  updatedAt: string;
  updatedBy: string;
  children: {
    id: string;
    name: {
      en: string;
      ru: string;
      tm: string;
    };
    type: string;
    parentId: string;
    imageUrl: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    priority: number;
    createdBy: string;
    updatedBy: null | string;
  }[];
}
