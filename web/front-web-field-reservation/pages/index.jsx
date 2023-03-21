
import Head from 'next/head'
import Image from 'next/image'
import AuthModal from '../components/AuthModal'
import Header from '../components/Header'

const Home= () => {


  

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <Header />
      <AuthModal />
    </div>
  )
}

export default Home
