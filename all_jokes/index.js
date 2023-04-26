//@ts-check
const file = require("./jokes.json");
const JokeType = ["dark", "limit", "dev", "normal", "beauf", "blonde"];

module.exports.Jokes = class Jokes {
    getRandomJoke() {
        return file[Math.floor(Math.random() * file.length)];
    };

    getJokeByType(type) {
        if(!JokeType.includes(type)) throw new TypeError("Argument is not valid.");

        const f = this.filterJoke(type.toString());
        return f[Math.floor(Math.random() * f.length)];
    };

    getJokeById(id) {
        const maxId = file[file.length - 1].id;

        if(isNaN(id)) throw new TypeError("Argument must be a number.");
        if(!Number.isInteger(id)) throw new TypeError("Argument must be an integer.");
        if(id < 0 || id > maxId || id === 0) throw new RangeError(`Argument must be upper than 0 and lower than ${maxId}`); //I know, this is weird but I have ID problem in jokes.json
        
        return file.find(e => e.id === id);
    };

    getStats() {
        const data = {
            numberOfJokes: file.length,
            DarkJokes: this.filterJoke("dark").length,
            LimitJokes: this.filterJoke("limit").length,
            DevJokes: this.filterJoke("dev").length,
            NormalJokes: this.filterJoke("normal").length,
            BeaufJokes: this.filterJoke("beauf").length,
            BlondesJokes: this.filterJoke("blonde").length
        };

        return data;
    };

    getHelp() {
        return "https://discord.gg/E5hPRnMUgq";
    };

    filterJoke(type) {
        if(!JokeType.includes(type)) throw new TypeError("[Internal error] type error in filterJoke().");

        return file.filter(e => e.type === type);
    };
};
