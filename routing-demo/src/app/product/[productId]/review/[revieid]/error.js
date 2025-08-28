"use client"
import {useRouter} from "next/navigation"
import { startTransition } from "react"
const error = ({error , reset}) => {
  const router = useRouter()
  const reload = ()=>{
    startTransition(()=>{
      router.refresh()
      reset()
    })
  }
  return (
    <div>
      <h1>error in review id {error.message}</h1>
      <button onClick={reload()}>try again</button>
    </div>
  )
}

export default error