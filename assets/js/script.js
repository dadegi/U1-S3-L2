const title = document.querySelector('h1');
const list = document.querySelector('#list');
const odddLi = list.querySelectorAll('#list li:nth-child(odd)');
console.log(title);
console.log(odddLi);

title.style.color = 'red';

odddLi.forEach(item => (item.style.color = 'brown'));
odddLi.forEach(item => (item.style.fontWeight = 'bold'));
