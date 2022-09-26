import Router from 'next/router'
import { works as worksInfo } from '../data/worksInfo'
const Works = () => {
  return (
    <div
      id='projects'
      className='w-[900px] overflow-hidden mx-auto pt-[150px] h-[100vh] flex flex-col justify-center items-center rounded-xl px-10 py-7 text-center'
    >
      <h1 className='w-full text-2xl font-semibold text-principal'>
        PORTFOLIO
      </h1>
      <div className='w-[60%] text-white text-4xl font-semibold mt-3'>LATEST PROJECTS</div>
      <div
        className={`flex grid-cols-${
          worksInfo.length == 1 ? '1' : '2'
        } gap-[30px] max-w-[1024px] mx-auto my-8`}
      >
        {worksInfo?.map((item, index) => (
          <button
            key={index}
            className={`w-${
              worksInfo.length == 1 ? 'full' : '[300px]'
            } border rounded-lg overflow-hidden`}
            onClick={() => Router.push(`/detail/${item.rute}`)}
          >
            <img src={item.img} alt={item.tittle} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Works
