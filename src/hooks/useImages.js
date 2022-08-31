import { useEffect, useState } from "react";
import getAllImages from "../services/getAllImages";

const useImages = () => {
    const [images, setImages] = useState()

    useEffect(() => {
        getAllImages().then(res => setImages(res))
    }, [])

    return images
}
 
export default useImages;