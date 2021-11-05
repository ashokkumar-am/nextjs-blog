import Head from 'next/head'
import Navbar from './NavBar'
import Footer from './Footer'

export default function Layout({ title, description, keywords, children })
{
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous"></link>
            </Head>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Blackbird Boilerplate ',
    description: 'Blackbird Boilerplate Description',
    keywords: 'Blackbird Boilerplate keywords '
}