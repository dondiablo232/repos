export interface Owner {
  id: string;
  first_name: string;
  last_name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface DetailItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  is_favorite: boolean;
  description: string;
  owner: Owner;
  category: Category;
}
