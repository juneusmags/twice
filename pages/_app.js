import Layout from '../components/Layout'
import '../styles/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<script src="https://kit.fontawesome.com/6342488ad8.js" crossorigin="anonymous"></script>

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
      
  )
}

export default MyApp
