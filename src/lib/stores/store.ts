import { writable, type Writable } from 'svelte/store';

export type ApiImage = {
  id: number,
  category_id: number,
  file_name: string,
};

export type ApiCategories = {
  id: number,
  description: string,
  display_name: string,
  primary_image: string,
  images: ApiImage[],
};

export type ImageData = {
  src: string,
  alt: string,
}

export const categories: Writable<ApiCategories[]> = writable([]);

export const images: Writable<ImageData[]> = writable([]);

export const categoryName: Writable<string> = writable("");
