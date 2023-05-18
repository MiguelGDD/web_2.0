import Cards from './Cards'
const Works = ({worksData}) => {

  const { title, sub_title, works } = worksData || ''

  return (
    <section
      id='projects'
      className='mx-auto flex flex-col justify-center items-center rounded-xl py-7 text-center w-full'
    >
      <h1 className='w-full text-2xl font-semibold text-principal'>
        {title}
      </h1>
      <div className='w-[60%] text-white text-4xl font-semibold my-3'>
        {sub_title}
      </div>
      <div
        className={`grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 max-w-[1024px] mx-auto my-8`}
      >
        {works?.map(({title, project_images, description, link}, index) =>
          <Cards 
            key={`${index}-${title}`}
            title={title}
            images={project_images}
            description={description}
            link={link}
          />
        )}
      </div>
    </section>
  )
}

export default Works
