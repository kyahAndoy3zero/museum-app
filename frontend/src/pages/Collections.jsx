
import Spinner from "../components/Spinner/Spinner"

import {useFetchgetArtifactsOverview, useDownloadFile} from '../feature/api/artifact-api/useArtifactQuery'


import { useNavigate } from 'react-router-dom'
import { getUser } from "../components/util/localStorageUtils"



function Collections(props) {

    const { data, isLoading} = useFetchgetArtifactsOverview()
  
    const user = getUser()
    const navigate = useNavigate()
    const fileDownload = useDownloadFile();

    
    const downloadFile = (year) => {
        fileDownload.mutate(year)
    }


    if(!user) {
        navigate('/login')
    }
    
    if (isLoading) {
        return <Spinner />
    }


    return (
        <>
            <div className="mx-5 my-5">
                <p className='text-4xl font-bold text-gray-600'>Collection Catalogues</p>
            
        

            <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-base text-left text-gray-500 dark:text-gray-400">
                <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Year
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Year Around
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Specific Year
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Century
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>


                    {data?.data?.overviews.map((overview, i) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {overview.catalogue_year}
                        </th>
                        <td className="px-6 py-4">
                            {overview.yearAround !== 0 ? (
                            <span>{overview.yearAround} </span>
                            ) : 0}
                        </td>
                        <td className="px-6 py-4">
                        {overview.specificYear !== 0 ? (
                            <span>{overview.specificYear} </span>
                            ) : 0}
                        </td>
                        <td className="px-6 py-4">
                        {overview.century !== 0 ? (
                            <span>{overview.century} </span>
                            ): 0}
                        </td>
                        <td className="px-6 py-4">
                        {overview.artifacts}
                        </td>
                        <td className="px-6 py-4">
                            <button onClick={() => downloadFile(overview.catalogue_year.toString())} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
           </div>
        </>

    )
}



export default Collections
