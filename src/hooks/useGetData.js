import { useEffect, useState } from "react";

const useGetData = (service, page = 1) => {

    const [data, setData] = useState({
       loading: true,
       error: null,
       data: null 
    });

    useEffect(() => {
      execService();

    }, [])
    
    const execService = async () => {
        
        const response = await service(page);
        
        if(response.status === 200){
            setData({
                ...data,
                loading: false,
                data: response.data,
            });

        } else {
            setData({
                ...data,
                loading: false,
                error: `Request failed with status code ${response.status} || ${response.data.errors}`
            });
        }
        
    };

    return [data.loading, data.data,  data.error];
};

export default useGetData;