import React from 'react'
import Head from 'next/dist/shared/lib/head'

function Meta({title, keywords, description}) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "WebDev News",
    keywords: "web development, programming, nextjs",
    description: "Latest WebDev News"
}

export default Meta
