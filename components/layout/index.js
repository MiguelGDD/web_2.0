import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Nav from '../nav/Nav'

const Layout = ({ children }) => {
  return (
    <main className='bg-[#212121] relative'>
      <Header />
      <Nav />
      <div className='min-h-screen items-center justify-center flex flex-col w-full'>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout
