import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'

function Article({article}) {
    const router = useRouter()

    const {id} = router.query
    return (
        <div>
            <Link href='/'>
                <a>Go back</a>
            </Link>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }

}

export const getStaticPaths = async () =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json()

    const paths = articles.map(article => ({params: {id: article.id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default Article
