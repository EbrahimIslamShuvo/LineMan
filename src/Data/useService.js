import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setService] = useState([])
    useEffect(()=>{
        fetch('/public/Service.json')
        .then(res => res.json())
        .then(data => setService(data.services))
    },[])

    return {services};
};

export default useService;