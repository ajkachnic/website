import Head from 'next/head'

import { DefaultSeo } from 'next-seo'

import '../styles/global.css'
import { lazyLoadFont } from '../lib/helpers'

function MyApp({ Component, pageProps }) {
  lazyLoadFont('da87c01864afa81807e93479eb61e929', '/fonts/fonts.da87c01864afa81807e93479eb61e929.woff.json')  

  const description = `I'm a young person at an unspecified age. I've worked with TypeScript, Go, Rust, React, Vue, Svelte, etc in the past. Here you can find more information about me.`

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/assets/pfp.png' />
      </Head>
      <DefaultSeo
        title="Andrew Kachnic"
        description={description}
        canonical="https://andrewkachnic.now.sh"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://andrewkachnic.now.sh',
          title: 'Andrew Kachnic',
          description,
          site_name: 'Andrew Kachnic',
          images: [
            {
              url: '/assets/header.png',
              width: 1500,
              height: 500,
              alt: 'Andrew Kachnic - Fullstack Web Developer'
            }
          ],
        }}
        twitter={{
          handle: '@su_andrewk',
          site: '@su_andrewk',
          cardType: 'summary_large_image'
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'andrew kachnic,developer,ajkachnic,andrew,kachnic,website,portfolio,fullstack,web,projects,about'
          }
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp