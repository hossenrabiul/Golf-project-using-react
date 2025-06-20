import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import api from '../api'
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../constants'
const ProtectedRoute = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    },[])

    const refresh = async ()=> {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try{
            const res = await api.post('api/token/refresh', 
                {Refresh: refreshToken}
            )

            if(res.status === 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            }
            else{
                setIsAuthorized(false)
            }
        }catch(error){
            console.log(error)
            setIsAuthorized(false)
        }
        
    }

    const auth = async ()=>{
        const token = localStorage.getItem(ACCESS_TOKEN)

        if(!token){
            setIsAuthorized(false)
            return
        }
        
        const decoded = jwtDecode(token)
        const expiration = decoded.exp
        const date = Date.now / 1000
        if(expiration < date){
            await refresh()
        }
        else{
            setIsAuthorized(true)
        }
    }

    if(isAuthorized === null){
        return <div>Loading....</div>
    } 
    {
       return isAuthorized ? children : <Navigate to={'/login'}></Navigate>
    }
};

export default ProtectedRoute;