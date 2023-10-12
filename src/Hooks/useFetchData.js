import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (param) => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_BACKEND_URL+"/api/blog/all-blogs";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const getData = async(link) =>{
    try{
setLoading(true);
const res = await axios(link);
await setData(res.data);

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
    data, loading, error, getData: link=> getData(link)

  };
};

export default useFetchData;



