import {GifGridItem} from "./GifGridItem";

import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({categoria})=>{

    const {data:imagenes,loading} = useFetchGifs(categoria);

    return (
        <>
            <h3 className="animate__animated animate__flash">{categoria}</h3>

            {loading && <p className="animate__animated animate__fadeIn">Loading</p>}
            {<div className="card-grid">

                {
                    imagenes.map(image => {
                        return <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    })
                }
            </div>}
        </>
    );
}