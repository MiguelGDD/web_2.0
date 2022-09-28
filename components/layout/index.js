import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <main className='bg-[#212121]'>
      <Header />
      <div className='min-h-screen items-center justify-center flex flex-col'>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout
