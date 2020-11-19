function Pokemon({pokemon}){
    return (
        <div>
            Welcome, {pokemon?.name}!
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name}/>
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    const pokemon = await res.json()

    return{
        props: {
            pokemon
        }
    }
}

export default Pokemon