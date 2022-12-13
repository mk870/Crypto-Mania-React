import axios from "axios"



export const DeleteApiCall = (url,value,setApiData,setError)=>{
  
  axios.delete(url,{headers:{"Authorization" : `Bearer ${value}`}})
  .then(data =>{
    setApiData(data.data)
    setError('')
    
  })
  .catch(e =>{
    setError(e.message)
  })


}