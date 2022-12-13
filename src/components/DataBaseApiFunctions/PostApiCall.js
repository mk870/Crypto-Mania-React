import axios from "axios"

export const PostApiCall = (url,userData,jwt,setApiData,setError)=>{
  axios.post(url,userData,{headers:{"Authentication" : `Bearer ${jwt}`}})
  .then(data =>{
    setApiData(data.data)
    setError('')
    
  })
  .catch(e =>{
    setError(e.message)
  })


}