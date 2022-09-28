import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/layout'
import { works } from '../../data/worksInfo'

const DetailProjects = () => {
  const route = useRouter()
  const { id } = route.query
  const filterWork = works?.filter((item) => item.rute == id)
  return (
    <Layout>
      <div className='w-full h-full justify-center items-center flex flex-col space-y-10'>
        <Link href={`${filterWork[0]?.extraInfo.link}`} passHref>
          <a target='_blank' rel='noreferrer'>
            <div className=' w-[350px] rounded-xl overflow-hidden'>
              <img src={filterWork[0]?.img} alt={filterWork[0]?.tittle} />
            </div>
          </a>
        </Link>
        <div className='flex flex-col text-center max-w-[900px] space-y-5 text-white'>
          <h1 className='text-3xl font-bold'>{filterWork[0]?.tittle}</h1>
          <div className='flex text-3xl text-center items-center w-full justify-center space-x-10'>
            {filterWork[0]?.extraInfo.tools.map((item) => (
              <item.icon />
            ))}
          </div>
          <p className='text-xl'>{filterWork[0]?.extraInfo.description}</p>
        </div>
      </div>
    </Layout>
  )
}

export default DetailProjects
