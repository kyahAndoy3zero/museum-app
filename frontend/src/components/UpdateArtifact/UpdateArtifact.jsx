import { useState } from "react"
import { useUpdateArtifactMutation } from "../../feature/api/artifact-api/useArtifactQuery"



function UpdateArtifact({ artifact, artifactId, onClose }) {




    const { mutate: updateArtifact } = useUpdateArtifactMutation();

    const [formData, setFormData] = useState({

        objectName: '',
        location: '',
        specificYear: '',
        width: '',
        height: '',
        month: '',
        day: '',
        byCentury: '',
        byYearAround: ''

    })

    let { objectName, location, specificYear, width, height, additionalDetails, month, day, byCentury, byYearAround } = formData


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()

        const fileInput1 = document.getElementById('dropzone-file1')
        const imageCover = fileInput1.files[0]

        const fileInput2 = document.getElementById('dropzone-file2')
        const images = fileInput2.files;

        const artifactData = {
            objectName,
            location,
            specificYear,
            byYearAround,
            byCentury,
            month,
            day,
            width,
            height,
            additionalDetails,
           

        }

        const formData = new FormData();

        for (const [key, value] of Object.entries(artifactData)) {
            if (value) {
                formData.append(key, value);
            }
        }

        if (imageCover) {
            formData.append('imageCover', imageCover);
        }

        if (images && images.length > 0) {
            for (let i = 0; i < Math.min(images.length, 3); i++) {
                formData.append('images', images[i]);
            }
        }
        updateArtifact({ data: formData, id: artifactId });
        onClose()
    }




    return (
        <>
        

            <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="grid gap-6 mb-6 md:grid-cols-2">

                    <div>
                        <label htmlFor="objectName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Object Name</label>
                        <input
                            type="text"
                            id="objectName"
                            name='objectName'
                            value={objectName}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={artifact.objectName} />
                    </div>

                  
                    <div>
                        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                        <input
                            type="text"
                            id='location'
                            name='location'
                            value={location}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={artifact.location} />
                    </div>

                    

                  {artifact.month && <div>
                        <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Month Created</label>
                        <input
                            type="text"
                            id='month'
                            name='month'
                            value={month}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={artifact.month} />
                    </div>
                }
                 {artifact.day &&   <div>
                        <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day</label>
                        <input
                            type="day"
                            id='day'
                            name='day'
                            value={day}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={artifact.day} />
                    </div>}

                
                    {artifact.byYearAround && <div>
                        <label htmlFor="byYearAround" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">By Year Around</label>
                        <input
                            type="number"
                            id='byYearAround'
                            name='byYearAround'
                            value={byYearAround}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={artifact.byYearAround} />
                    </div>}

                    {artifact.byCentury && <div>
                        <label htmlFor="byCentury" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">By Century</label>
                        <input
                            type="number"
                            id='byCentury'
                            name='byCentury'
                            value={byCentury}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={artifact.byCentury} />
                    </div>}
                    
                    {artifact.specificYear && <div>
                        <label htmlFor="byCentury" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">By Specific Year</label>
                        <input
                            type="number"
                            id='specificYear'
                            name='specificYear'
                            value={specificYear}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={artifact.specificYear} />
                    </div>}
                    
                    <div className="col-span-full">
                        <label htmlFor="additionalDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Details</label>
                        <textarea id="additionalDetails" name='additionalDetails' value={additionalDetails} onChange={onChange} rows="4" className="block  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={artifact.additionalDetails}></textarea>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="additionalDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image Cover</label>
                        <label htmlFor="dropzone-file1" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload image cover</span></p>

                            </div>
                            <input id="dropzone-file1" type="file" className="hidden" />
                        </label>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="additionalDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Images</label>
                        <label htmlFor="dropzone-file2" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to images</span></p>
                            </div>
                            <input id="dropzone-file2" type="file" className="hidden" multiple />
                        </label>
                    </div>
                </div>
                <div className="my-10">
                    <button type="submit"  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                    <button onClick={() => onClose()} type="button" className="w-full mt-2 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                </div>
            </form> 



        </>
    )
}

export default UpdateArtifact