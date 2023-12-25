import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'https://zafremedia.ir/aryanVest/index.php?graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-VJB2RDD6QR`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VJB2RDD6QR', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Script src="//code.tidio.co/1kt3bvtouqse2gmjqneaa646azdyozca.js" async></Script>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
