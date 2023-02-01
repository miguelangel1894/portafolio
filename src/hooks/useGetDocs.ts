import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import database from "../firebase/firebase";

import { GetAllJobs } from "../interfaces/CRUDInterface";



export const useGetDocs =(pathCollection: string) =>{
    
    const[docs, setDocs] = useState<GetAllJobs[]>([])
    const[isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        
        const fetchData = async () =>{
            
            const GetData: GetAllJobs[] = []
                
                const querySnapshot = await getDocs(collection(database, pathCollection));
                querySnapshot.forEach((doc) => {

                    GetData.push({...doc.data(), id: doc.id})
                    setIsLoading(true)
                });
                
                setDocs(GetData)
            }
            
            fetchData()
            setIsLoading(false)
            console.log('llamando use GetDdocs')
        
    },[pathCollection])

return{
    docs, isLoading
    }   
}
