import ImageGallery from "../components/Gallery/ImageGallery"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllArtifacts, reset } from "../feature/artifacts/artifactsSlice"
import Spinner from "../components/Spinner/Spinner"


function Gallery() {

    const { artifacts, isLoading, isError, message } = useSelector((state) => state.artifacts)
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        if (!user) {
            navigate('/login')
        }

        dispatch(getAllArtifacts())

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, isError, message, dispatch])


    if (isLoading) {
        return <Spinner />
    }




    return (

        <>
            <div className="mx-5 my-5">
                <div className="mb-5">
                    <p className='mb-5 text-4xl font-bold text-gray-600'>Gallery</p>
                </div>

                {artifacts.map((artifact, id) => {
                    return <ImageGallery artifactImageContent={artifact.images} key={id} />
                })}

            </div>
        </>
    )
}

export default Gallery