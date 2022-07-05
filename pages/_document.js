import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        {/* META */}
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='description' content='AkzMeals Website' />
        <meta name='author' content='Akhildev MJ' />
        <meta
          name='keywords'
          content='Next.js, React.js, Tailwind, HTML, CSS, JavaScript'
        />

        {/* ICONS */}
        <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link rel='manifest' href='manifest.webmanifest' />

        {/* GOOGLE FONT */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
