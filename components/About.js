import React from 'react'

const About = () => {
  return (
    <div
      id='about'
      className='overflow-hidden mx-auto flex flex-col space-x-[47px] justify-between items-center p-10 text-white h-[100vh] sm:justify-center'
    >
      <div className='flex flex-col justify-center h-full sm:flex-row sm:h-fit'>
        <div className=' rounded-xl broder flex overflow-hidden object-center items-center justify-center'>
          <img
            src={'/miguelLogo.jpg'}
            className='w-[400px] overflow-hidden justify-center'
          />
        </div>
        <div className='w-full flex font-semibold flex-col space-y-5 max-w-[400px] sm:max-w-[500px] sm:justify-center sm:pl-5'>
          <div className='text-base text-principal tracking-widest mt-1'>ABOUT ME</div>
          <div className=' text-3xl'>I’m Miguel Guell</div>
          <div className=' text-[18px] font-normal text-description'>
            I am a front-end developer passionate about creating attractive and functional web applications. I have experience working with JavaScript and TypeScript, as well as with React and Next.js, to create modern and scalable web applications. I also have skills in HTML, CSS, Tailwind CSS, and Material UI to develop effective and attractive user interfaces.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
