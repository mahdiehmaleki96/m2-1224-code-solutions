// Define the Props type
type Pokemon = {
  number: string;
  name: string;
};

type PokemonListProps = {
  pokedex: Pokemon[];
};

function PokemonList({ pokedex }: PokemonListProps) {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export default PokemonList;
