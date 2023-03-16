
import Head from 'next/head'
import Image from 'next/image'
import AuthModal from '../components/AuthModal'

const Home= () => {


  const ModalAuth =()=>{
    const modal= document.querySelector('.authmodal')
    modal.classList.remove('hidden')
    modal.classList.add('flex')
}

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <i onClick={ModalAuth}  class='bx bx-menu absolute text-4xl top-5 right-5'></i>
      <AuthModal />
    </div>
  )
}

export default Home
