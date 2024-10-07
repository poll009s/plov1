import React ,{useEffect, useState} from 'react';
import styles from '@/styles/Home.module.css'
import NaveBare from '@/components/NavBar';
import {motion} from 'framer-motion';
import Link from 'next/link'

export default function Home() {

    const [downloaddom ,setDownlodDom] = useState(false);

    useEffect(() =>{
         setDownlodDom(true)
    },[])
  return (
    <>
     {downloaddom && (
      <section className='main-contaier'>
        <div className=''>
        <h1 className=''>HEY, MY NAME IS MOHAMED ELOUADI</h1>
          <div className=''>
            <p> The shopping context should be followed by a discount. Here I will explain the easy times </p>
            <p>that leave behind wise solutions to complex problems.</p>
          </div>
         <motion.div 
         whileHover={{
          scale : 1.05,

         }}
         className='imagesoultions'>
            <Link href="./shop/shop">
               <button className='bg-violet-600  uppercase tracking-widest font-extrabold rounded-xl btn-bng hover:bg-violet-900 animate-pulse text-white'>Shoop konw</button>
            </Link>
          </motion.div>                 
        </div>
      </section>
     )}
    </>
  )
}
