import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = ()=> {

    const [categorias, setCategorias] = useState(['Samurai X']);

    /*const handleAdd = ()=>{
        setCategorias([...categorias, 'Monster']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCategory setCategorias={setCategorias}/>
            <ol>
                {
                    categorias.map(category => {
                        return <GifGrid
                            key={category}
                            categoria={category}/>
                    })
                }
            </ol>
        </>
    )
}



export default GifExpertApp;