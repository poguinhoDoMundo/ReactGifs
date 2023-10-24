import { GifIten } from "./GifItem";
import { useFectchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    
    const {images, isLoading } = useFectchGifs({category});

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando</h2>

            }

            

            <div className="card-grid">
                {
                    images.map(  (image)   =>(
                    <GifIten 
                        key={image.id}
                        { ...image }
                        />
                    )
                )}
            </div>
            
           
        </>
    )
}
