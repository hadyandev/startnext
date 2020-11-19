import Head from 'next/head'

function Pokemon({pokemon}){
    return (
        <>
            <head>
                <title>Pokemon: {pokemon?.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </head>
            <div>
                Welcome, {pokemon?.name}!
                <img src={pokemon?.sprites.front_default} alt={pokemon?.name}/>
            </div>
        </>
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