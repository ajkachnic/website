import '../styles/global.css'
import { lazyLoadFont } from '../lib/helpers'

function MyApp({ Component, pageProps }) {
  lazyLoadFont('da87c01864afa81807e93479eb61e929', '/fonts/fonts.da87c01864afa81807e93479eb61e929.woff.json')  
  return <Component {...pageProps} />
}

export default MyApp