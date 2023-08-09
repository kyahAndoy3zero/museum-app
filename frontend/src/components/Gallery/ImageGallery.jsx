import getImgUrl from "../Util/getImgUrl"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


function ImageGallery({ artifactImageContent }) {

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {artifactImageContent.map((img, i) => (
                <div key={i}>
                    <LazyLoadImage
                        src={getImgUrl(img)}
                        effect="blur"
                        className="transition-all duration-300 ease-in rounded-md cursor-pointer grayscale hover:grayscale-0"
                    />
                </div>
            ))}
        </div>

    )
}

export default ImageGallery