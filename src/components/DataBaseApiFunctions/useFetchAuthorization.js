import axios from 'axios'
import { useState,useEffect,useContext } from 'react'
import {JwtContext} from '../utils/AppContext'

const useFetchAuthorization = (url,setOnload,onDelete,setOnDelete,setError,error) => {
  const [apiData,setApiData] = useState('')
  
  const {value} = useContext(JwtContext)
  useEffect(() => {
    setOnload(true)
    setError('')
    setOnDelete('')
    axios.get(url,{headers:{"Authorization" : `Bearer ${value}`}})
      .then(data =>{
        setApiData(data.data)
        setError('')
      })
      .catch(e =>{
        
        setError(e.message)
      })
    },[onDelete])
  useEffect(()=>{
    if(apiData || error){
      setOnload(false)
    }
  },[apiData,error])
  return{apiData}
}

export default useFetchAuthorization