import { fetchCountries } from './api.js';
import { displayCountries } from './ui.js';

async function init() {
    try {
        const countries = await fetchCountries();
        displayCountries(countries);
    } catch (error) {
        console.error('Error fetching and displaying countries:', error);
    }
}

init();