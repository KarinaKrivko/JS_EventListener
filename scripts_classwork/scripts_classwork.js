const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener( 'click', () => {
const text = document.createElement('p');
text.innerText = 'hello';
container.append(text);
});



   