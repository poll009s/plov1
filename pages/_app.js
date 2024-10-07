import Layout from "@/components/Layout";
import "@/styles/globals.css";
import '@/styles/shoop.css';
import '@/styles/cart.css';
import '@/styles/hits.css'

import ShopcontxetProvider from "./shop/shop_context";

export default function App({ Component, pageProps }) {
  return (
    <ShopcontxetProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopcontxetProvider>
  );
}
