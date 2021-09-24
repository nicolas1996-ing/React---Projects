// hooks : funciones 
import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs' // función para hacer fetch a giphy 



export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
    }, [category])

    return state; // {data : [], loading : true}

}