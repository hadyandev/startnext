import Head from 'next/head'
import Link from 'next/link'

function Home(){
    return (
        <>
            <head>
                <title>My Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </head>
            <div>Welcome, Blog reader!</div>
            <Link href="/">
                <a>Go Back Home</a>
            </Link>
        </>
    )
}

export default Home