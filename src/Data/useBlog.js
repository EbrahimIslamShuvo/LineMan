import React, { useEffect, useState } from 'react';

const useBlog = () => {
    const [blogs, setBlog] = useState([])
    useEffect(()=>{
        fetch('/public/Blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    return {blogs};
};

export default useBlog;
