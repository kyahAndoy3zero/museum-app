
import { useParams } from 'react-router-dom'
import CardContainer from './Card/CardContainer'
import Card from './Card/Card'
import { NavLink } from 'react-router-dom'
import Spinner from './Spinner/Spinner'
import {useFetchgetArtifactByYearCollected} from '../feature/api/artifact-api/useArtifactQuery.js'

function CollectionsOverview() {


    const { year } = useParams()
    const { data, isLoading} = useFetchgetArtifactByYearCollected(year)


    if(isLoading) {
        return <Spinner />
    }
 

  
    return (
       
        <CardContainer>
            {data?.data?.artifacts.map((artifact, i) => (

                <NavLink to={"/artifact-details/" + artifact._id.toString()} key={i} end>
                    <Card key={i} img={artifact.imageCover ? `http://127.0.0.1:5000/public/img/artifacts/${artifact.imageCover}` : "https://via.placeholder.com/500x300?text=Artifact+Image"} id={artifact._id}>
                        <p className="text-lg font-medium dark:text-slate-200">{`${artifact.objectName.slice(0, 30)}...`}</p>
                        <div className="text-sky-500 dark:text-sky-400">
                            {artifact.byCentury && `${artifact.byCentury}th century`}
                            {artifact.byYearAround && `${artifact.byYearAround}s`}
                            {artifact.specificYear && `${artifact.specificYear}`}
                        </div>
                        <div className="flex justify-between mt-6 text-slate-700 dark:text-slate-500">
                            <div>
                                {artifact.location}
                            </div>
                            <div>
                                {artifact.objectIdNo}
                            </div>
                        </div>
                    </Card>
                </NavLink>
            ))}
        </CardContainer>
    )
}

export default CollectionsOverview