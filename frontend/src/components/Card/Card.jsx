import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import getImgUrl from '../util/getImgUrl';
import NoImage from '../../assets/placeholder.jpg'
import  { useState, useEffect } from 'react';
function Card({ imgContent, children }) {

  
    const [imgSrc, setImgSrc] = useState('');
  
    useEffect(() => {
   
      if (imgContent !== undefined) {
        setImgSrc(getImgUrl(imgContent));
      } else {
        setImgSrc(NoImage);
      }
    }, [imgContent]);
  
  

    return (

        <>
            <div className="relative max-w-sm overflow-hidden transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 hover:shadow-2xl hover:backdrop-filter hover:backdrop-blur-lg">

    

            <LazyLoadImage
                src={imgSrc}
                effect="blur"
                onError={() => setImgSrc(NoImage)} 

            />
       
                <div className="p-5 ">
                    {children}
                </div>

            </div>
        </>
    )
}

export default Card