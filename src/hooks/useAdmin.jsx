import { useEffect, useState } from "react"


const useAdmin=displayName=>{
    const [isAdmin,setIsAdmin]=useState(false)
    const [isAdminLoader,setIsAdminLoader]=useState(true)
    useEffect(()=>{
    if(displayName){
        fetch(`http://localhost:5000/admin/${displayName}`)
        .then(res=>res.json())
        .then(data=>{
            setIsAdmin(data.isAdmin)
            setIsAdminLoader(false)
        })
    }
    },[displayName])
    return[isAdmin,isAdminLoader]
}
export default useAdmin