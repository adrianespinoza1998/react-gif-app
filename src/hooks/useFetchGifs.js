import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (categoria)=>{

    const [state, setState]=useState({
        data: [],
        loading: true
    });

    /*setTimeout(()=>{
        setState({
            data: [1,2,3,4,5],
            loading: false
        });
    },3000);*/

    useEffect( ()=>{
        getGifs(categoria).then(img =>
            setTimeout(()=>{
                setState({
                    data: img,
                    loading:false
                });
            },3000)
        );
    }, [categoria]);

    return state;
}