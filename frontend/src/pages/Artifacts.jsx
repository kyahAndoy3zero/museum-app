
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce';


//Components
import CardContainer from "../components/Card/CardContainer"
import Card from "../components/Card/Card"
import Spinner from './../components/Spinner/Spinner'

import { useFetchArtifacts, useFetchSearchArtifact } from '../feature/api/artifact-api/useArtifactQuery'
import { getUser } from '../components/util/localStorageUtils';


function Artifacts() {

    const navigate = useNavigate()
    const user = getUser()

    const [currentPage, setPage] = useState(1);
    const [objectIdNo, setObjectIdNo] = useState('')


    const debounceFilter = useDebounce(objectIdNo, 800)
    const {data: searchResult} = useFetchSearchArtifact(debounceFilter[0])
 
    const {data, isLoading} = useFetchArtifacts(currentPage);


 
    if(!user){
        navigate('/login')
    }

    const onChange = (e) => {   
        setObjectIdNo(e.target.value)
    }


    if(isLoading) {
        return <Spinner />
    }


 

    return (
        <>
            <div className='flex items-center justify-between w-auto mx-5 my-5'>
                <div>
                    <p className='text-4xl font-bold text-gray-600'>Artifacts</p>
                </div>

                <div className="w-1/6">
                   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="text" value={objectIdNo} name={objectIdNo} onChange={onChange} id="objectIdNo" className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Accession ID " required />
                    </div>
                   
                </div>
 
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button" onClick={() => setPage(data?.previousPage?.page)} disabled={!data?.previousPage?.page || (searchResult?.data?.artifacts && searchResult.data.artifacts.length > 0)} className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ${!data?.previousPage?.page || (searchResult?.data?.artifacts && searchResult.data.artifacts.length > 0) ? "opacity-50 cursor-not-allowed" : ""}`}>
                        Prev
                    </button>
                    <button type="button" onClick={() => setPage(data?.nextPage?.page)} disabled={!data?.nextPage?.page || (searchResult?.data?.artifacts && searchResult.data.artifacts.length > 0)} className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ${!data?.nextPage?.page || (searchResult?.data?.artifacts && searchResult.data.artifacts.length > 0) ? "opacity-50 cursor-not-allowed" : ""}`}>
                        Next
                    </button>
                </div>  
            </div>

            <CardContainer>
                {(searchResult?.data?.artifacts && searchResult.data.artifacts.length > 0 ? searchResult.data.artifacts : data?.data?.artifacts)?.map((artifact, i) => (
                    <NavLink to={"/artifact-details/" + artifact._id.toString()} key={i}>
                        <Card key={artifact._id} artifacts={artifact} imgContent={artifact.imageCover} id={artifact._id}>
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
        </>
    )
}

export default Artifacts