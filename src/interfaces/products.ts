export interface OneSeparateProduct {
  id: string;
  name_tm: string;
  name_en: string;
  name_ru: string;
  description_tm: string;
  description_en: string;
  description_ru: string;
  price: string;
  currency: string;
  barcode: string;
  sku: string;
  stockQuantity: number;
  minOrderQuantity: number;
  salesLimitQuantity: number;
  status: string;
  images: string[];
  categories: any[];
  store: any;
}

export interface ProductType {
  id: string;
  imageUrl: string;
  name: {
    en: string;
    ru: string;
    tm: string;
  };
  parentId: null | string;
  products: OneSeparateProduct[];
}

export interface ProductFilters {
  page?: number;
  limit?: number;
  type?: string;
}

export type CategoryProductResp = ProductType[];
