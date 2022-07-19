import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null)
    const[isPending,setisPending] = useState(true)
    const[error,setError]=useState(null);

    useEffect(() => {
       const abortcont = new AbortController();

        fetch(url,{signal: abortcont.signal})
        .then(res=>{
            if(!res.ok){
                throw Error('Unable to get the resources');
            }
            return res.json();
        })
        
        .then(data=>{
            setData(data);
            setisPending(false);
            setError(null);
        })

        .catch(err=>{
            if(err.name==="AbortError"){
                console.log("Fetch Aborted")
            }else{
            setisPending(false);
            setError(err.message);
            }
        })
return ()=> abortcont.abort();
},[url]);

return {data,isPending,error}
}

export default useFetch;

