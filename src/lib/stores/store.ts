import { writable, type Writable } from 'svelte/store';

export type ApiImages = {
  id: number,
  category_id: number,
  file_name: string,
};

export type ApiCategories = {
  id: number,
  description: string,
  display_name: string,
  images: ApiImages[]
};

export const categories: Writable<ApiCategories[]> = writable([]);

export const images = writable([]);

export const categoryName = writable('')