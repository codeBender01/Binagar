export interface CategoryProductResp {
  categories: ProductType[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

export interface ProductType {
  id: string;
  name: {
    en: string;
    ru: string;
    tm: string;
  };
  products: OneSeparateProduct[];
  type: string;
}

export interface OneSeparateProduct {
  barcode: string;
  categories: {
    categoryId: string;
    isPrimary: boolean;
  }[];
  currency: string;
  description_en: string;
  description_ru: string;
  description_tm: string;
  id: string;
  images: [];
  minOrderQuantity: number;
  name_en: string;
  name_ru: string;
  name_tm: string;
  price: string;
  salesLimitQuantity: number;
  sku: string;
  status: string;
  stockQuantity: number;
  store: null;
}

export interface ProductFilters {
  page: number;
  limit: number;
  type: string;
}
