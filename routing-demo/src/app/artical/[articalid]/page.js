'use client'
import React from 'react'
import Link from 'next/link'
import { use } from 'react'

export default function ArticlePage({ params, searchParams }) {
  const { articalid } = use(params)
  const { lang = 'en' } = use(searchParams)

  return (
    <div>
      <h1>News article {articalid}</h1>
      <p>Reading in this {lang}</p>

      <Link href={`/artical/${articalid}?lang=en`}>English</Link><br />
      <Link href={`/artical/${articalid}?lang=es`}>Spanish</Link><br />
      <Link href={`/artical/${articalid}?lang=fr`}>French</Link>
    </div>
  )
}
