const ulElement = document.querySelector('ul');

for (let i = 0; i <= 100; i++){

    if (i % 3 === 0 && i % 5 === 0){
        const liElement = document.createElement('li');
        liElement.classList.add('fizz-buzz');
        liElement.append('Fizzbuzz');
        ulElement.appendChild(liElement);
        console.log('FizzBuzz')
    } else if (i % 3 === 0){
        const liElement = document.createElement('li');
        liElement.classList.add('fizz');
        liElement.append('Fizz');
        ulElement.appendChild(liElement);
        console.log('Fizz')
    } else if (i % 5 === 0){
        const liElement = document.createElement('li');
        liElement.classList.add('buzz');
        liElement.append('Buzz');
        ulElement.appendChild(liElement);
        console.log('Buzz')
    } else {
        const liElement = document.createElement('li');
        liElement.classList.add('number');
        liElement.append(i);
        ulElement.appendChild(liElement);
        console.log(i)
    }
}