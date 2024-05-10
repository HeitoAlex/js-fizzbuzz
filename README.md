# js-fizzbuzz

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


1 creare un ciclo for che stampi i numeri in console partendo da 1 aggiungendo ogni volta +1 al conteggio per stampare il numero seguente per arrivare a 100

2 all'interno del ciclo porre la condizione che qualora il numero sia multiplo di 3 (i % 3 === 0 ) in console stampi “Fizz”

3 porre la condizione alternativa che qualora il numero sia multiplo di 5 (i % 5 === 0) in console stampi “Buzz”

4 porre la condizione alternativa che qualora il numero sia multiplo di 3 e 5 (i % 3 === 0 && i % 5 === 0) in console stampi “FizzBuzz”