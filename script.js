const button = document.getElementById('button')
const func = (event) => {
    element = document.createElement('p');
    element.innerText = 'Hello World';
    document.body.appendChild(element);
}

button.onclick = func;
