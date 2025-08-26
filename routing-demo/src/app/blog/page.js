import Link from "next/link"
 async function page  () {
  await new Promise((resolve , reject)=>{
    setTimeout(() => {
      resolve("intentional delay")
    }, 2000);
  })
  return (<>
  

    <div><h1>BLOG PAGE!</h1></div>
    <p>
    this is a blog page to see the all blog and redirect the blog details page
    </p>
    <Link href="/product">product</Link>
  </>
  )
}

export default page