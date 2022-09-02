import React from 'react'

const About = () => {
  return (
    <div className='w-[900px] overflow-hidden mx-auto flex flex-row my-36 justify-between items-center border-2 rounded-xl px-10 py-7 space-x-10'>
      <div className='w-full flex flex-col space-y-5'>
        <div className=''>Hola, soy Miguel.</div>
        <div className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          unde ratione iusto error molestiae quaerat numquam nostrum nemo quis,
          neque, temporibus aliquid nulla qui laboriosam molestias optio animi,
          porro ex.
        </div>
      </div>
      <div className=' rounded-full broder border-8 border-teal-300 flex overflow-hidden object-center items-center justify-center'>
        <img
          src={'/miguel-foto.jpg'}
          className='h-[160px] w-[220px] overflow-hidden justify-center'
        />
      </div>
    </div>
  )
}

export default About
