import Layout from '../components/Layout.jsx'
import '../../styles/custom.scss'


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
