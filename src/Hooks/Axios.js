import { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = (param) => {
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [total, setTotal] = useState();
    axios.defaults.baseURL= `${process.env.REACT_APP_BASE_BACKEND_URL}/software/`;

    const getData = async(link) =>{
        try{
setLoading(true);
const res = await axios(link);
setData(res.data.data);
const total = await axios.get(`${process.env.REACT_APP_BASE_BACKEND_URL}/software/total/${param}`);
await setTotal(total.data.total);

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

    data, loading, error, total, getData: link=> getData(link)
  }
  
}

export default Axios
