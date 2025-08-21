
"use client"
import {useRouter} from "next/navigation";

function orderPage() {
    const router  = useRouter()

    const handleClick = ()=>{
        console.log("your order is placed");
        router.push('/')
        
    }
  return (<>
    <div>this is order page </div>

    <button onClick={handleClick}>purchase this order</button>
  </>
  )
}

export default orderPage