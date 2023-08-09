
import { useState } from 'react'
import { Modal } from '../Modal/Modal'

//Components
import AritfactHeader from './AritfactHeader'
import ArtifactImageContent from './ArtifactImageContent'
import ArtifactDescription from './ArtifactDescription'
import DeleteArtifacts from '../Delete/DeleteArtifacts'
import UpdateArtifact from '../UpdateArtifact/UpdateArtifact'


function ArtifactContentDetails({ artifact }) {



    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)


    return (
        <>

             <div className='p-5 mx-5'>

                {artifact.images &&
                    <ArtifactImageContent artifactImageContent={artifact.images} />}

                <AritfactHeader artifact={artifact} />

                <ArtifactDescription artifactDescription={artifact.additionalDetails} />
                <button onClick={() => setShowModal1(!showModal1)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                </button>
                <button onClick={() => setShowModal2(!showModal2)} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                </button>
            </div>

            <Modal isVisible={showModal1} onClose={() => setShowModal1(!showModal1)} width={'w-1/3'} >
                <DeleteArtifacts artifactId={artifact._id} onClose={() => setShowModal1(!showModal1)} />
            </Modal>

            <Modal isVisible={showModal2} onClose={() => setShowModal2(!showModal2)} width={'w-1/2'} title={'Update Artifact'}>
                <UpdateArtifact artifact={artifact} artifactId={artifact._id} onClose={() => setShowModal2(!showModal2)} />
            </Modal> 
        </>

    )
}

export default ArtifactContentDetails