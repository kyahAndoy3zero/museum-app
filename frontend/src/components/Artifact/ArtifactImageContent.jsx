
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function ArtifactImageContent({ artifactImageContent }) {
  const baseUrl = 'http://127.0.0.1:5000/public/img/artifacts/';

  return (
    <>
      <div className='mt-10 space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3'>
        {artifactImageContent.map((img, i) => (
          <div key={i}>
            <LazyLoadImage
              src={baseUrl + img}
              effect="blur"
              className='rounded-md'  
           
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ArtifactImageContent;