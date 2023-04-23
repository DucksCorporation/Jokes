import json
import random
from enum import Enum
from pydantic import BaseModel

with open("Bdd/jokes.json", "r") as f:
    jokes = json.load(f)


class JokeType(str, Enum):
    DARK = "dark"
    LIMIT = "limit"
    DEV = "dev"
    NORMAL = "normal"
    BEAUF = "beauf"

class Joke(BaseModel):
    id: int
    joke: str
    type: JokeType
    answer: str


def get_random_joke() -> Joke:
    return Joke.parse_obj(random.choice(jokes))


def get_joke_by_type(joketype: JokeType) -> Joke | ValueError:
    if joketype in JokeType:
        return Joke.parse_obj(random.choice([joke for joke in jokes if joke["type"] == joketype]))
    else:
        raise ValueError(f"Unknown joke type: {str(joketype)}")


def get_joke_by_id(jokeid: int) -> Joke | ValueError:
    if type(jokeid) == int:
        if jokeid <= 0 or jokeid >= len(jokes):
            raise ValueError(f"Id out of range: {str(jokeid)}")
        else:
            for joke in jokes:
                if jokeid == joke["id"]:
                    return Joke.parse_obj(joke)
            raise ValueError(f"Unknown joke id: {str(jokeid)}")
    else:
        raise ValueError("Id must be an integer")


def discord_help():
    return "https://discord.gg/E5hPRnMUgq"


def get_joke_count():
    return len(jokes)
