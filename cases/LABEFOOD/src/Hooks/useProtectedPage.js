import { useEffect } from "react"
import { goToLogin } from "../Router/coordinator"
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    useEffect(()=> {

        if(!token){
            goToLogin(navigate)
        }
    }, [])
}

export default useProtectedPage