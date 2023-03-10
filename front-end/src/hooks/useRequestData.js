import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, headers) => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        console.log("Passou no teste!")
        setIsLoading(true)
        axios.get(url, headers)
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            }).catch((err) => {
                setError(err);
                setIsLoading(false)
            })
    }, [])

    return [data, isLoading, error]
};