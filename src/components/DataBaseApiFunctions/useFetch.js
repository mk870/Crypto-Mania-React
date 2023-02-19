import axios from 'axios'
import { useState,useEffect,useContext } from 'react'
import {JwtContext} from '../utils/AppContext'


const UseFetch = (url,jwt) => {
  const [apiData,setApiData] = useState('')
  const [error,setError] = useState('')
  const {setValue} = useContext(JwtContext)
  useEffect(() => {
    axios.get(url,{headers:{"Authorization" : `Bearer ${jwt}`}})
    .then(data =>{
      setApiData(data.data)
      setError('')
      if('accessToken' in data.data){
        setValue(data.data.accessToken)
      }
    })
    .catch(e =>{
      if (e.response?.data.error !== "") {
        setError(e.response?.data.error);
      }
      if (JSON.stringify(e).message === "Network Error") {
        setError("your internet connection is poor");
      }
    })
  }, [])
  
  return{apiData,error,setError}
}

export default UseFetch