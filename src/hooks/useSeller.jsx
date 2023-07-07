import { useEffect, useState } from "react"

const useSeller=displayName=>{
    const [isSeller,setIsSeller]=useState(false)
    const [isSellerLoader,setIsSellerloader]=useState(true)
    useEffect(()=>{
        if(displayName){
            fetch(`https://varadotcom-server.vercel.app/seller/${displayName}`)
            .then(res=>res.json())
            .then(data=>{
                setIsSeller(data.isSeller)
                setIsSellerloader(false)
            })
        }
    },[displayName])
    return[isSeller,isSellerLoader]
}
export default useSeller;