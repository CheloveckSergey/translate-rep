import '@/styles/globals.css';
import '@/styles/styles.css';
import Layout from 'components/Layout';
import StateContext from 'components/StateContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient} >
        <StateContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </QueryClientProvider>
    </>
  ) 
}
