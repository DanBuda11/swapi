import '../styles/main.css';
import axios from 'axios';

// console.log('yay');

const ROOT_URL = 'http://swapi.co/api';

const planets = [];

for (let i = 1; i < 8; i++) {
	axios.get(`${ROOT_URL}/planets/${i}`)
	.then((res) => {
		console.log(res);
	}).catch((e) => {
		console.log(e)
	});
};




	// data