import Head from 'next/head'

export default function Header({ title="Z2m" }) {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <title>{title}</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
     
        </>
    )
}