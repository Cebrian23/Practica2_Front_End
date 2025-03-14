import { FunctionalComponent } from "preact";

type Props = {
    character: {
        url: string,
        name: string,
        birth_year: string,
        gender: string,
        hair_color: string,
        eye_color: string,
        skin_color: string,
        height: string,
        mass: string,
        homeworld: string,
        films: string[],
        species: string[],
        starships: string[],
        vehicles: string[],
        created: string,
        edited: string,
    }
}

const Character: FunctionalComponent<Props> = (props) => {
    const character = props.character;

    return(
        <>
            <h1>Page of {character.name}</h1>
            <div>
                <div>
                    <strong>{character.name}'s page was created on: </strong>{character.created}
                </div>
                <div>
                    <strong>{character.name}'s page last update was on: </strong>{character.edited}
                </div>
            </div>
            <div>
                <h2>{character.name} info:</h2>
                <div>
                    <li><strong>Birth year: </strong>{character.birth_year}</li>
                    <li><strong>Gender: </strong>{character.gender}</li>
                    <li><strong>Hair Color: </strong>{character.hair_color}</li>
                    <li><strong>Eye Color: </strong>{character.eye_color}</li>
                    <li><strong>Skin Color: </strong>{character.skin_color}</li>
                    <li><strong>Height: </strong>{character.height}</li>
                    <li><strong>Mass: </strong>{character.mass}</li>
                    <li><strong>Homeworld: </strong><a href={character.homeworld} target="_blank">{character.homeworld}</a></li>
                    <li><strong>Character's URL: </strong><a href={character.url} target="_blank">{character.url}</a></li>
                </div>
            </div>
            <div>
                <h2>{character.name} belongs to the specie/s: </h2>
                <div>
                    {
                        character.species.map((specie) => (
                            <li>
                                <a href={specie} target="_blank">{specie}</a>
                            </li>
                        ))
                    }
                </div>
            </div>
            <div>
                <h2>Films where {character.name} appears:</h2>
                <div>
                    {
                        character.films.map((film) => (
                            <li>
                                <a href={film} target="_blank">{film}</a>
                            </li>
                        ))
                    }
                </div>
            </div>
            <div>
                <h2>Starships that {character.name} has piloted: </h2>
                <div>
                    {
                        character.starships.map((star) => (
                            <li>
                                <a href={star} target="_blank">{star}</a>
                            </li>
                        ))
                    }
                </div>
            </div>
            <div>
                <h2>Vehicle that {character.name} has piloted: </h2>
                <div>
                {
                    character.vehicles.map((vehicle) => (
                        <li>
                            <a href={vehicle} target="_blank">{vehicle}</a>
                        </li>
                    ))
                }
                </div>
            </div>
        </>
    );
}

export default Character;