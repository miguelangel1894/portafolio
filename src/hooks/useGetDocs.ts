import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import database from "../firebase/firebase";

import { GetAllJobs } from "../interfaces/CRUDInterface";



export const useGetDocs =(path: string) =>{
    
    const[docs, setDocs] = useState<GetAllJobs[]>([])
    const[isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        
        const fetchData = async () =>{
            
            const GetData: GetAllJobs[] = []
                
                const querySnapshot = await getDocs(collection(database, path));
                querySnapshot.forEach((doc) => {

                    GetData.push({...doc.data(), id: doc.id})
                    setIsLoading(true)
                });
                
                setDocs(GetData)
            }
            
            fetchData()
            setIsLoading(false)
            console.log('llamando use GetDdocs')
        
    },[path])

return{
    docs, isLoading
    }   
}
