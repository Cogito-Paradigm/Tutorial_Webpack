// import _ from 'lodash';
import './style.css';
import Icon from './free-icon-south-korea-197582.png';
import printMe from './print.js';

// function component() {
// 	const element = document.createElement('div');
// 	const btn = document.createElement('button');

// 	//
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	element.classList.add('hello');

// 	//
// 	const myIcon = new Image();
// 	myIcon.src = Icon;
// 	element.appendChild(myIcon);

// 	//
// 	btn.innerHTML = 'Click me and check the console!';
// 	btn.onclick = printMe;
// 	element.appendChild(btn);

// 	return element;
// }
// //
// document.body.appendChild(component());

// function getComponent() {
// 	const element = document.createElement('div');

// 	return import('lodash')
// 		.then(({ default: _ }) => {
// 			const element = document.createElement('div');

// 			element.innerHTML = _.join(['Hello', 'webpack', ' ']);

// 			return element;
// 		})
// 		.catch((error) => 'An error occured while loading the component');
// }

async function getComponent() {
	const element = document.createElement('div');
	const { default: _ } = await import('lodash');

	element.innerHTML = _.join(['Hello', 'webpack', ' ']);

	return element;
}

getComponent().then((component) => {
	document.body.appendChild(component);
});
