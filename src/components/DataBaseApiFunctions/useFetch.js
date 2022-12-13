import axios from 'axios'
import { useState,useEffect,useContext } from 'react'
import {JwtContext} from '../utils/AppContext'


const UseFetch = (url,jwt) => {
  const [apiData,setApiData] = useState('')
  const [error,setError] = useState('')
  const {setValue} = useContext(JwtContext)
  useEffect(() => {
    axios.get(url,{headers:{"Authentication" : `Bearer ${jwt}`}})
    .then(data =>{
      setApiData(data.data)
      setError('')
      if('jwt' in data.data){
        setValue(data.data.jwt)
      }
      
      console.log(data.data)
    })
    .catch(e =>{
      console.log(e.message)
      setError(e.message)
    })
  
    
  }, [])
  
  return{apiData,error,setError}
}

export default UseFetch