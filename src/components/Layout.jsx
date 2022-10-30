import Head from 'next/head'
import Navigation from './Navigation.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Next-Bootstrap Template</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="nextjs,reactjs,react-bootstrap,bootstrap,next-bootstrap,next-strap" />
                <meta name="description" content="A simple next app with react-bootstrap and bootstrap" />
                <meta name="author" content="Webb Designs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Main Nav Bar */}
            <Navigation />

            {/* URL breadcrumbs */}
            <Breadcrumbs />

            {/* Main App Content */}
            <main>
                {children}
            </main>
        </div>
    )
}