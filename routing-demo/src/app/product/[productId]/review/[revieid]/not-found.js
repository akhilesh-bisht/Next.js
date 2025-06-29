"use client"

import {usePathname} from "next/navigation"
function notFound() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  return (
   <h1>404 of not found review page only for Product {productId} and Review {reviewId}</h1>
  )
}

export default notFound