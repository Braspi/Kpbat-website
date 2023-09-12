import { addMessages, init, getLocaleFromNavigator  } from "svelte-i18n";

import en from '$lib/assets/locales/en.json';
import fr from '$lib/assets/locales/fr.json';
addMessages('en', en);
addMessages('fr', fr);

init({
    fallbackLocale: 'fr',
    initialLocale: 'fr',
});
