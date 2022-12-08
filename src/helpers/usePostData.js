import {useState,useEffect} from 'react';

const usePostData=(url,dataToAdd)=>{

    const [data,setData]=useState(null)
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{

        fetch(url,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(dataToAdd),
          }).then((res)=>{
      console.log(res)
      setIsPending(false)
      setData(res)
          });},[url]);

return {data,isPending,error}
}

export default usePostData