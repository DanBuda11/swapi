import './styles/main.css';
import axios from 'axios';
import _ from 'lodash';

const planetSelect = document.getElementById('planet-select');
const dataDiv = document.getElementById('data');
const ROOT_URL = 'http://swapi.co/api';
let allPlanets = [];

planetSelect.addEventListener('change', () => {
	// console.log(planetSelect.value);
	console.log(allPlanets); // showing up as empty array - fixed now?

	const key = _.findKey(allPlanets, { name: planetSelect.value });

	// console.log('key: ', key);

	const planetName = document.querySelector('.planet-name');
	const diameter = document.querySelector('.planet-diameter');
	const gravity = document.querySelector('.planet-gravity');
	const orbital = document.querySelector('.planet-orbital-period');
	const rotation = document.querySelector('.planet-rotation-period');
	const climate = document.querySelector('.planet-climate');
	const terrain = document.querySelector('.planet-terrain');
	const water = document.querySelector('.planet-surface-water');
	const population = document.querySelector('.planet-population');
	
	planetName.innerHTML = allPlanets[key].name;
	diameter.innerHTML = `Diameter: ${allPlanets[key].diameter} kilometers`;
	gravity.innerHTML = `Gravity: ${allPlanets[key].gravity} G(s)`;
	orbital.innerHTML = `Orbital Period: ${allPlanets[key].orbital_period} days`;
	rotation.innerHTML = `Rotational Period: ${allPlanets[key].rotation_period} hours`;
	climate.innerHTML = `Climate: ${allPlanets[key].climate}`;
	terrain.innerHTML = `Terrain: ${allPlanets[key].terrain}`;
	water.innerHTML = `Water: ${allPlanets[key].surface_water}%`;
	population.innerHTML = `Population: ${allPlanets[key].population}`;

	dataDiv.style.display = 'block';
});

const getPlanets = async (pages) => {
	

	try {
		let planets = [];
		
		for (let i = 1; i < pages + 1; i++) {
			const response = await axios.get(`${ROOT_URL}/planets/?page=${i}`);

			for (let j = 0; j < response.data.results.length; j++) {
				planets.push(response.data.results[j]);
			}
		}

		return planets;
	} catch (e) {
			throw new Error('Request unsuccessul.');
	}
};

const sortPlanets = async (pages) => {
	const planets = await getPlanets(pages);
	const sortedPlanets = await planets.sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase()) {
			return -1;
		} else if (a.name.toLowerCase() > b.name.toLowerCase()) {
			return 1;
		}
		return 0;
	});

	return sortedPlanets;
};

sortPlanets(7).then((status) => {
	// console.log('status: ', status);
	// allPlanets = status;
	// console.log(allPlanets);
	status.forEach((planet, i) => {
		const option = document.createElement('option');
		option.textContent = planet.name;
		option.value = planet.name;
		planetSelect.appendChild(option);
	});
	return allPlanets = status;
}).catch((e) => {
	console.log(e.message);
});