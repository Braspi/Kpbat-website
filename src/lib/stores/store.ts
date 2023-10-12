import { writable, derived } from 'svelte/store';

export const categories = writable([]);

// export const drinkNames = derived(apiData, ($apiData) => {
//
//     return [];
// });