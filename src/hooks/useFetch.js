import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) =>
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            setLoading(true);

            try
            {
                const res = await axios.get(url);
                setData(res.data);
            }
            catch (e)
            {
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);

    const fetchData = async (method, body = null, id) =>
    {
        setLoading(true);

        try
        {
            let res;

            switch (method.toLowerCase())
            {
                case 'get':
                    res = await axios.get(url);
                    break;
                case 'post':
                    res = await axios.post(url, body);
                    break;
                case 'put':
                    res = await axios.put(`${url}/${id}`, body);
                    break;
                case 'delete':
                    res = await axios.delete(`${url}/${id}`);
                    break;
                default:
                    throw new Error('Unsupported method');
            }

            setData(res.data);
        }
        catch (e)
        {
            setError(true);
        }

        setLoading(false);
    }

    const reFetch = async () =>
    {
        fetchData('get');
    }

    const postData = async (body) =>
    {
        fetchData('post', body);
    }

    const putData = async (body, id) =>
    {
        fetchData('put', body, id);
    }

    const deleteData = async (body, id) =>
    {
        fetchData('delete',body, id);
    }

    return { data, loading, error, reFetch, postData, putData, deleteData };
}

export default useFetch;