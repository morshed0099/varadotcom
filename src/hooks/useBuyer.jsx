import { useEffect, useState } from "react"

const useBuyer=displayName=>{
    const [isBuyer,setIsBuyer]=useState(false)
    const [isBuyerLoader,setIsBuyerLoader]=useState(true)
    useEffect(()=>{
        if(displayName){
            fetch(`http://localhost:5000/buyer/${displayName}`)
            .then(res=>res.json())
            .then(data=>{
                setIsBuyer(data.isBuyer)
                setIsBuyerLoader(false)
            })
        }
    },[displayName])
    return[isBuyer,isBuyerLoader]
}
export default useBuyer;