import axios from "axios"

export const PostApiCall = (url,userData,jwt,setApiData,setError)=>{
  axios.post(url,userData,{headers:{"Authorization" : `Bearer ${jwt}`}})
  .then(data =>{
    setApiData(data.data)
    setError('')
  })
  .catch(e =>{
    if (e.response?.data?.error !== "") {
      setError(e.response?.data?.error);
    }
    if (JSON.stringify(e).message === "Network Error") {
      setError("your internet connection is poor");
    }
  })
}
