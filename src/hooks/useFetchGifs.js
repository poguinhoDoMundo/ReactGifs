import { useEffect } from "react";
import { useState } from "react";

import {getGifs} from   "../Helpers/GetGifs";

export const useFectchGifs = ( {category} ) =>{

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs({category});
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( ()=> {
        getImages();
    }, []);


    return {
        images: images,
        isLoading: isLoading
    }

}