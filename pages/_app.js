// ./pages/_app.js

import DocsLayout from "../layouts/ArticleLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 
  // configure default article layout
  
  const articleLayout = (page) => {
    // pass `markdoc` props to ArticleLayout
    return (
      page.props.markdoc && (
        <DocsLayout markdoc={page.props.markdoc}> {page}</DocsLayout>
      )
    );
  };

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || articleLayout;

  console.log({ pageProps });

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
