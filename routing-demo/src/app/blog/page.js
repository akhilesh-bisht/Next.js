import Link from "next/link"
function page() {
  return (<>
    <div><h1>BLOG PAGE!</h1></div>
    <Link href="/product">product</Link>
  </>
  )
}

export default page