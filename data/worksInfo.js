import { DiNodejs } from 'react-icons/di'
import { SiTailwindcss, SiRedux } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export const works = [
  {
    title: 'TreeApp',
    images: 
    [{img: '/projects/treeapp/thumbnail.svg'},
     {img: '/projects/treeapp/login.svg'},
     {img: '/projects/treeapp/view2.svg'},
     {img: '/projects/treeapp/view1.svg'},
     {img: '/projects/treeapp/view3.svg'},],
    slug: 'treeapp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: 'https://treeapp.co/',
    tools: [
    { icon: function () { return <DiNodejs /> } },
    { icon: function () { return <SiTailwindcss /> } },
    { icon: function () { return <SiRedux /> } },
    { icon: function () { return <FaReact /> } }
    ],
  },
  {
    title: 'WareHouse Boxes',
    images: 
    [{img: '/projects/warehouse.svg'},
     {img: '/projects/warehouse.svg'},
     {img: '/projects/warehouse.svg'},
     {img: '/projects/warehouse.svg'},],
    slug: 'warehouse',
    link: 'https://www.warehousebox.net/',
      description: 'A Cloud based Software that allows you access to your live inventory, and Instant communication with our warehouse staff.',
      tools: [
        { icon: function () { return <DiNodejs /> } },
        { icon: function () { return <SiTailwindcss /> } },
        { icon: function () { return <SiRedux /> } },
        { icon: function () { return <FaReact /> } }
      ],
  },
  {
    title: 'ThorFi',
    images: 
    [{img: '/projects/thorfi.svg'},
     {img: '/projects/thorfi.svg'},
     {img: '/projects/thorfi.svg'},
     {img: '/projects/thorfi.svg'},],
    slug: 'thorfi',
    link: 'https://thorui.netlify.app/',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      tools: [
        { icon: function () { return <DiNodejs /> } },
        { icon: function () { return <SiTailwindcss /> } },
        { icon: function () { return <SiRedux /> } },
        { icon: function () { return <FaReact /> } }
      ],
  },
]
