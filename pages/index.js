import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahinotes</title>
        <meta name="note sharing platform" content="One platform for all your notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='bg-slate-700'>main</h1>
      </main>

      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  )
}
