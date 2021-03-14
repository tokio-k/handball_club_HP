import Head from 'next/head'
import { Footer } from 'src/components/footer'
import { Header } from 'src/components/header'
export function MainLayout({children}): JSX.Element {
    return (
        <>
            <Head>
                <title>愛知大学男子ハンドボール</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}