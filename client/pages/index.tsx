import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/sidebar'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TrendAssemble</title>
      </Head>


      <main>

        {/* sidebar */}
        <Sidebar />

        {/* feeds */}
      </main>
    </div>
  )
}

export default Home
