import Head from 'next/head'
import { useRouter } from 'next/router'

function Home(){
    const router = useRouter()
    const handleClick = e => {
        e.preventDefault()
        router.push("/pokemon")
    }
    return (
        <>
            <head>
                <title>My Next.js Site</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </head>
            <div>Welcome, Explorer!</div>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </>
    )
}

export default Home