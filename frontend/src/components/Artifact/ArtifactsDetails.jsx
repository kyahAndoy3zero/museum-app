
import ArtifactContentDetails from './ArtifactContentDetails'
import Spinner from '../Spinner/Spinner'

import { useParams } from 'react-router-dom'
import {useFetchArtifact} from '../../feature/api/artifact-api/useArtifactQuery'

function ArtifactsDetails() {

    const { id } = useParams();
    const {data, isLoading} = useFetchArtifact(id);
    console.log(id, data);

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>

  
        <ArtifactContentDetails artifact={data?.data?.artifacts} />
        
        </>
    )
}

export default ArtifactsDetails