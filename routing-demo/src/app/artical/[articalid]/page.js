import React from 'react'
import Link from 'next/link'

 async function page({params ,searchParams}) {
    const{articalid} = await params()
    const {lang = 'en'} = await searchParams()
  return (
    <div>
        <h1> news articals {articalid}</h1>
        <p> reading in {lang}</p>


        <Link href='/artical/id?lang=en'>ENGLISH </Link>
         <Link href='/artical/id?lang=es'>sapnish </Link>
          <Link href='/artical/id?lang=fr'>French </Link>
    </div>
  )
}

export default page