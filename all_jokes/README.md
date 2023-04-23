# all_jokes
This module allows you to get different jokes from a variety of choices.

### Usage (Javascript)
```js
const { Jokes } = require("all_jokes");
const jokes = new Jokes();

console.log(
    jokes.getRandomJoke(), //return a joke
    jokes.getJokeByType(JokeType), //jokeType: ["dark", "limit", "dev", "normal", "beauf"]
    jokes.getJokeById(Number), // return a joke via an id
    jokes.help() //return the discord support server
    $jokes.getJokeCount() //return the number of jokes
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

### Usage (Python)
```py
import all_jokes as jokes
print(jokes.get_random_joke()) #return a joke
print(jokes.get_joke_by_type(JokeType)) #JokeType: ["dark", "limit", "dev", "normal", "beauf"]
print(jokes.get_joke_by_id(int)) #return a joke via an id
print(jokes.discord_help()) #return the discord support server
print(jokes.get_joke_count()) #return the number of jokes

#Example:
#    print(jokes.get_random_joke())
#    output =>
#        {
#            id: 1486,
#            type: 'normal',
#            joke: 'Pourquoi mange-t-on des escargots ?',
#            answer: 'Car nous n'aimons pas le fast-food.'
#        }
#
#    print(jokes.get_joke_by_type("dark"))
#    output =>     
#        {	
#          	id: 6,
#          	type: 'dark',
#          	joke: "Qu'est-ce qui a 4 pattes et un bras ?",
#          	answer: 'Un pitbull dans un jardin d'enfants.'
#        }
#
#    print(jokes.get_joke_by_id(1057))
#    output =>
#        {	
#      	    id: 1057,
#      	    type: 'limit',
#      	    joke: "Qu'est-ce qui est rose, fait 5 cm, 15 cm dépliés et qui fait rêver toutes les filles de 18 ans ?",
#      	    answer: 'Le permis de conduire.'
#        }
#
#    print(jokes.discord_help()) 
#    output => https://discord.gg/E5hPRnMUgq
```

