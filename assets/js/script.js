const title = document.querySelector('h1');
const list = document.querySelector('#list');
const odddLi = list.querySelectorAll('#list li:nth-child(odd)');
const hidden = document.getElementById('hidden');
const show = document.getElementById('show');
const tableBody = document.getElementById('users');
const realPrice = document.getElementById('realPrice');
const majorPrice = document.getElementById('majorPrice');
const totalPrice = document.getElementById('totalPrice');

const persons = [
	{
		name: 'Mario',
		surname: 'Rossi',
		email: 'mario@rossi.com',
	},
	{
		name: 'Aldo',
		surname: 'Bianchi',
		email: 'aldo@bianchi.com',
	},
	{
		name: 'Maria',
		surname: 'Verdi',
		email: 'maria@verdi.com',
	},
	{
		name: 'Giovanna',
		surname: 'Neri',
		email: 'giovanna@neri.com',
	},
	{
		name: 'Nicola',
		surname: 'Remi',
		email: 'nicola@remi.com',
	},
];

const arrayPrices = [12, 25, 57, 42, 31, 68];
let deliveryPrice = 10;
let cart = [];
let total = 0;

console.log(title);
console.log(odddLi);

document.addEventListener('DOMContentLoaded', init());

function init() {
	title.style.color = 'red';
	hidden.style.visibility = 'hidden';
	showElement();
	printUsersList();
	createCart();
	totalCart();
}

odddLi.forEach(item => (item.style.color = 'brown'));
odddLi.forEach(item => (item.style.fontWeight = 'bold'));

function showElement() {
	show.addEventListener('click', function(e) {
        e.preventDefault();
        shownElement();
    });
}

function shownElement() {
	hidden.style.visibility = 'visible';
}

function printUsersList() {
	persons.forEach(element => {
		const tdUserName = document.createElement('td');
		tdUserName.innerText = element.name;
		const tdUserSurname = document.createElement('td');
		tdUserSurname.innerText = element.surname;
		const tdUserEmail = document.createElement('td');
		tdUserEmail.innerText = element.email;
		const trUser = document.createElement('tr');
		trUser.appendChild(tdUserName);
		trUser.appendChild(tdUserSurname);
		trUser.appendChild(tdUserEmail);
		tableBody.appendChild(trUser);
	});
}

function createCart() {
	cart = arrayPrices.map(element => {
		if (element < 40) {
			element = element + deliveryPrice;
		}
		return element;
	});
}

function totalCart() {
	total = cart.reduce((sum, item) => sum + item, 0);
}

realPrice.innerText = `Prezzi netti: ${arrayPrices}`;
majorPrice.innerText = `Con spese spedizione: ${cart}`;
totalPrice.innerText = `Totale carrello: € ${total}`;
