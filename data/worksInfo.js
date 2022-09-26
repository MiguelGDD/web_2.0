import { DiNodejs } from 'react-icons/di'
import { SiTailwindcss, SiRedux } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export const works = [
  {
    tittle: 'TreeApp',
    img: 'https://my-portfolio-abmlxd5l6-edwinnv.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftreeapp.4b73f465.png&w=1920&q=75',
    rute: 'treeapp',
    extraInfo: {
      tittle: 'TreeApp',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      tools: [
        { icon: function () { return <DiNodejs /> } },
        { icon: function () { return <SiTailwindcss /> } },
        { icon: function () { return <SiRedux /> } },
        { icon: function () { return <FaReact /> } }
      ],
      img: 'https://my-portfolio-abmlxd5l6-edwinnv.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftreeapp.4b73f465.png&w=1920&q=75',
      link: 'https://cofai-arbolapp.herokuapp.com/',
    },
  },
]
