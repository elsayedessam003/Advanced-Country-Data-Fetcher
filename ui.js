export function displayCountries(countries) {
    const container = document.getElementById('countries-container');
    container.innerHTML = ''; // Clear previous content

    countries.forEach(country => {
        // Skip creating the card if the country is France
        if (country.name.common !== "Israel") {
            const card = createCountryCard(country);
            container.appendChild(card);
        }
    });
}

function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';

    const flag = document.createElement('img');
    flag.src = country.flags.svg;
    flag.alt = `Flag of ${country.name.common}`;

    const name = document.createElement('h2');
    name.textContent = country.name.common;

    const population = document.createElement('p');
    population.textContent = `Population: ${country.population.toLocaleString()}`;

    const region = document.createElement('p');
    region.textContent = `Region: ${country.region}`;

    card.appendChild(flag);
    card.appendChild(name);
    card.appendChild(population);
    card.appendChild(region);

    return card;
}
