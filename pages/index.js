import Head from 'next/head'

export default function Home()
{
  return (
    <div>
      <Head>
        <title>Blackbird Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <h1 className="text-9xl text-white font-bold mx-auto max-w-6xl">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-green-600">BLACKBIRD
          </span>
        </h1>
      </div>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <h1 className="text-9xl text-white font-bold mx-auto max-w-6xl">
          <span className="text-transparent bg-gradient-to-l bg-clip-text from-red-600 to-green-600">BOILERPLATE
          </span>
        </h1>
      </div>

    </div>
  )
}
