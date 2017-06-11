import './styles/main.css';
import axios from 'axios';

// get planets from each page and push into main array
// THEN sort the full array
// THEN append to #planet-select


const planetSelect = document.getElementById('planet-select');
planetSelect.addEventListener('change', () => {
	console.log(planetSelect.value);
});

const logPlanet = () => {
	console.log(planetSelect.value);
};

// Try using node 8 async-await or promises to see
// if that makes it work?

// Need to figure out why console.log(planets) works
// but I can't actually use the planets array

// Also remember that the planets.sort and planets.forEach
// aren't even working, or console logging at all


// Try from this stack overflow question:
// https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call

const ROOT_URL = 'http://swapi.co/api';
const allPlanets = [];

const getPlanets = async (pages) => {
	try {
		let allPlanets = [];
		
		for (let i = 1; i < pages + 1; i++) {
			const response = await axios.get(`${ROOT_URL}/planets/?page=${i}`);

			for (let j = 0; j < response.data.results.length; j++) {
				allPlanets.push(response.data.results[j].name);
			}
		}
		return allPlanets;
	} catch (e) {
			throw new Error('Get failed');
	}
};


const sortPlanets = async (pages) => {
	const planets = await getPlanets(pages);
	const sortedPlanets = planets.sort();
	return sortedPlanets;
};


sortPlanets(7).then((status) => {
	status.forEach((planet) => {
		const option = document.createElement('option');
		option.textContent = planet;
		option.value = planet;
		planetSelect.appendChild(option);
	});



	// allPlanets.forEach((planet) => {
	// 	const option = document.createElement('option');
	// 	option.textContent = planet;
	// 	planetSelect.appendChild(option);
	// });
	
}).catch((e) => {
	console.log(e.message);
});

// const getPlanets = async (page) => {
// 	try {
// 		const response = await axios.get(`${ROOT_URL}/planets/?page=${page}`);
// 		return planets.push(response.data.results);
// 	} catch (e) {
// 		throw new Error();
// 	}
// };

// for (let i = 1; i < 8; i++) {
// 	getPlanets(i);
// }

// planets.sort();

// console.log(planets);
// const planetSelect = document.getElementById('planet-select');


// const planets = [];

// function getSrc(page) {
// 	return axios.get(`${ROOT_URL}/planets/?page=${page}`);
// 	console.log('1');
// };

// for (let i = 1; i < 8; i++) {
// 	getSrc(i).then((res) => {
// 		return res.data.results.map((planet) => {
// 			planets.push(planet);
// 		});
// 	});
// };



	// axios.get(`${ROOT_URL}/planets/?page=${i}`)
	// .then((res) => {
	// 	res.data.results.map((planet) => {
	// 		planets.push(planet);
	// 	});
	// }).catch((e) => {
	// 	console.log(e)
	// });


// sort planets
// planets.sort((a, b) => {
// 	console.log(a);
// 	if (a.name < b.name) {
// 		return -1;
// 	} else if (a.name > b.name) {
// 		return 1;
// 	}
// 	return 0;
// });
// append each planet name to the select after adding <option>

// console.log(planets);

// console.log(planets[1].name);
// planets.forEach((planet) => {
// 	console.log(planet);
// });
