import React from 'react'
import Link from 'next/link'

function ProductLst() {
  let productId  = 21
  return (
  <>
  <Link href="/">back to home</Link>
  <h1>ProducT lists!</h1>
  <Link href='/product/1'>ProducT 1</Link>
    <Link href='/product/2'>ProducT 2</Link>
      <Link href={`/product/${productId}`}>ProducT {productId}</Link>
  </>
  )
}

export default ProductLst