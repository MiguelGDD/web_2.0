import { works as worksInfo } from '../data/worksInfo'
import Cards from './Cards'
const Works = () => {
  return (
    <div
      id='projects'
      className='mx-auto pt-[150px] flex flex-col justify-center items-center rounded-xl py-7 text-center w-full'
    >
      <h1 className='w-full text-2xl font-semibold text-principal'>
        PORTFOLIO
      </h1>
      <div className='w-[60%] text-white text-4xl font-semibold my-3'>LATEST PROJECTS</div>
      <div
        className={`flex flex-col gap-[50px] max-w-[1024px] mx-auto my-8`}
      >
        {worksInfo?.map(({title, images, description, tools, slug, link}, index) =>
          <Cards 
            key={`${index}-${slug}`}
            title={title}
            images={images}
            description={description}
            tools={tools}
            link={link}
          />
        )}
      </div>
    </div>
  )
}

export default Works
