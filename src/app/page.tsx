

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/vmq0vek.css"></link>
      </Head>
      <main>
        <div>
          <h1 className="text-6xl font-handwriting mb-4 text-center text-cyan-500 font-handwriting">
            HIROTA
          </h1>
          <p className="text-lg float-right pr-4">
            これはHIROTAのテストページです
          </p>
        </div>
      </main>
    </>
  );
}