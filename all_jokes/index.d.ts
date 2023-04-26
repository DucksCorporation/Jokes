type JokeType =  "dark" | "limit" | "dev" | "normal" | "beauf" | "blonde";

interface IJokes {
    id: Number;
    type: JokeType;
    joke: string;
    answer: string;
}

declare class Jokes {
    public getRandomJoke(): IJokes;
    public getJokeByType(type: JokeType): IJokes;
    public getJokeById(id: number): IJokes;
    public getHelp(): string;
    public getStats(): Record<string, number>;

    private filterJoke(type: JokeType): IJokes;
}

export default Jokes;
