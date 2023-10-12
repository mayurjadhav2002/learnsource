import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BlogAxios = (param) => {
    const [blog , setBlog] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

console.log("Data", blog)

    axios.defaults.baseURL= process.env.REACT_APP_BASE_BACKEND_URL+'/api/blog/recommended';
    const getData = async(link) =>{
        try{
setLoading(true);
const res = await axios(link);
setBlog(res.data);

        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        getData(param);
    }, [param])
  return {

    blog, loading, error, getData: link=> getData(link)
  }
  
}

export default BlogAxios
