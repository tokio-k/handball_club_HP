import Head from 'next/head'
import { Footer } from 'src/components/footer'
import { Header } from 'src/components/header'
export function MainLayout({children}): JSX.Element {
    return (
        <>
            <Head>
                <title>愛知大学男子ハンドボール</title>
                <link rel="icon" href="/handball_icon_136530.ico" />
                <meta name="description" content="愛知大学 男子ハンドボール部のHPです。ハンドボール部に興味のある方是非" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}