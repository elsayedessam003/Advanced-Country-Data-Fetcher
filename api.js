const API_URL = 'https://restcountries.com/v3.1/all';

export async function fetchCountries() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
}