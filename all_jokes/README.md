# all_jokes
This module allows you to get different jokes from a variety of choices.

### Usage
```js
const { Jokes } = require("all_jokes");
const jokes = new Jokes();

console.log(
    jokes.getRandomJoke(), //return a joke
    jokes.getJokeByType(JokeType), //jokeType: ["dark", "limit", "dev", "normal", "beau"]
    jokes.getJokeById(Number), // return a joke via an id
    jokes.help() //return the discord support server
);

/*
Example: 
    console.log(jokes.getRandomJoke());
    output =>
        {
            id: 1486,
            type: 'normal',
            joke: 'Pourquoi mange-t-on des escargots ?',
            answer: 'Car nous n'aimons pas le fast-food.'
        }

    console.log(jokes.getJokeByType("dark"));
    output =>     
        {	
          	id: 6,
          	type: 'dark',
          	joke: "Qu'est-ce qui a 4 pattes et un bras ?",
          	answer: 'Un pitbull dans un jardin d'enfants.'
        }

    console.log(jokes.getJokeById(1057))
    output =>
        {	
      	    id: 1057,
      	    type: 'limit',
      	    joke: "Qu'est-ce qui est rose, fait 5 cm, 15 cm dépliés et qui fait rêver toutes les filles de 18 ans ?",
      	    answer: 'Le permis de conduire.'
        }

    console.log(jokes.help()) 
    output => https://discord.gg/E5hPRnMUgq
*/
```