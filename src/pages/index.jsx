import Head from 'next/head'
import Background from '../components/Background';
import Infos from "../components/Infos";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Background /> */}
        <Infos />
      </main>
    </>

  )
}

export default Home