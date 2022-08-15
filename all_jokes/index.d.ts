type JokeType =  "dark" | "limit" | "dev" | "normal" | "beauf";

interface IJokes {
    id: Number;
    type: JokeType;
    joke: string;
    answer: string;
}

declare class Jokes {
    getRandomJoke(): IJokes;
    getJokeByType(type: JokeType): IJokes;
    getJokeById(id: number): IJokes;
    help(): string;
}


export default Jokes;