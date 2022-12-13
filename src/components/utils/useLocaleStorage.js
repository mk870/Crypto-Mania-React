import { useEffect, useState } from "react"

export const useLocaleStorage = (defaultValue,key)=>{
  const [value,setValue] = useState(()=>{
    const localeStorageValue = localStorage.getItem(key)
    return localeStorageValue !== null ? JSON.parse(localeStorageValue):defaultValue
  })
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))

  },[key,value])
  return [value,setValue]
}