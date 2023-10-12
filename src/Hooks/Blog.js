import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BlogAxios = (param) => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [tags, setTags] = useState([]);
    const [author, setAuthor]  = useState([])
    console.log("Data", blog)

    axios.defaults.baseURL = process.env.REACT_APP_BASE_BACKEND_URL + '/api/blog/blog_by_id';
    const getData = async (link) => {
        try {
            setLoading(true);
            const res = await axios(link);
            setBlog(res.data.blog);
            setTags(res.data.blog.tags[0].split(","))
            setAuthor(res.data.blog.author)

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getData(param);
    }, [param])
    return {

        blog, loading, error, tags, author, getData: link => getData(link)
    }

}

export default BlogAxios
