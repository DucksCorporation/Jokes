//@ts-check
const jokesType = ["dark", "limit", "dev", "normal", "beauf"];
const file = require("./Bdd/jokes.json");

module.exports.Jokes = class Jokes {
    getRandomJoke() {    
        return file[Math.floor(Math.random() * file.length)];
    };

    getJokeByType(type) {
        if(!jokesType.includes(type)) throw new TypeError("Argument is not valid.");

        const f = file.filter(e => e.type === type);
        return f[Math.floor(Math.random() * f.length)];
    };

    getJokeById(id) {
        if(isNaN(id)) throw new TypeError("Argument is not valid.");
        if(!Number.isInteger(id)) throw new TypeError("Argument must be an integer.");
        if(id <= 0 ) throw new RangeError("Argument must be upper than 0.");
        if(id === Infinity) throw new RangeError("Argument must be lower than Infinity.");
        
        return file.find(e => e.id === id);
    };

    help() {
        return "https://discord.gg/E5hPRnMUgq";
    };
    getJokeCount() {
        return file.length;
    };
};