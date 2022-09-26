import React from 'react'

const About = () => {
  return (
    <div
      id='about'
      className='overflow-hidden mx-auto flex space-x-[47px] justify-between items-center p-10  text-white h-[100vh]'
    >
      <div className=' rounded-xl broder flex overflow-hidden object-center items-center justify-center'>
        <img
          src={'/miguelLogo.jpg'}
          className='w-[400px] overflow-hidden justify-center'
        />
      </div>
      <div className='w-full flex font-semibold flex-col space-y-5 max-w-[400px]'>
        <div className='text-base text-principal tracking-widest	'>ABOUT ME</div>
        <div className=' text-3xl'>I’m Miguel Guell</div>
        <div className=' text-[18px] font-normal text-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          unde ratione iusto error molestiae quaerat numquam nostrum nemo quis,
          neque, temporibus aliquid nulla qui laboriosam molestias optio animi,
          porro ex.
        </div>
      </div>
    </div>
  )
}

export default About
