import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function CollectionsContent() {

    const { id } = useParams()
    console.log(id)
    // const { artifacts, isLoading, isError, message } = useSelector((state) => state.artifacts)
    // const { user } = useSelector((state) => state.auth)
    // const navigate = useNavigate()

    // useEffect(() => {

    //     if (isError) {
    //         console.log(message)
    //     }

    //     if (!user) {
    //         navigate('/login')
    //     }

    // }, [id])

    return (
        <div>{id}</div>
    )
}

export default CollectionsContent