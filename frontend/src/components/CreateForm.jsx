import { useForm } from "react-hook-form"
import { useCreateArtifactMutation } from "../feature/api/artifact-api/useArtifactQuery";


const CreateForm = ({onClose}) => {

    const { register, handleSubmit } = useForm();
    const createArtifact = useCreateArtifactMutation();

    
    const send = (data) => {
        createArtifact.mutate(data)
        console.log(data)
        onClose()
    }

  return (
    <>

    <form onSubmit={handleSubmit(send)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="objectIdNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Accession ID</label>
                <input
                    type="text"
                    id="objectIdNo"
                    name='objectIdNo'
                    {...register("objectIdNo")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Accession ID" required />
            </div>
            <div>
                <label htmlFor="objectName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Object Name</label>
                <input
                    type="text"
                    id="objectName"
                    name='objectName'
                    {...register("objectName")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Object Name" required />
            </div>

            <div>
                <label htmlFor="width" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width</label>
                <input
                    type="number"
                    id='width'
                    name='width'
                    {...register("width")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Object Width" />
            </div>
            <div>
                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                <input
                    type="text"
                    id='location'
                    name='location'
                    {...register("location")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" />
            </div>


            <div>
                <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
                <input
                    type="number"
                    id='height'
                    name='height'
                    {...register("height")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Object Height" />
            </div>

            <div>
                <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Month Created</label>
                <input
                    type="text"
                    id='month'
                    name='month'
                    {...register("month")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Month" />
            </div>

            <div>
                <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day</label>
                <input
                    type="day"
                    id='day'
                    name='day'
                    {...register("day")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter day" />
            </div>

            {/* <div>
                <label htmlFor="specificYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year Created</label>
                <input
                    type="number"
                    id='specificYear'
                    name='specificYear'
                    {...register("specificYear")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Estimated Year"  />
            </div> */}

             <div>
                <label htmlFor="byCentury" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">By Century</label>
                <input
                    type="number"
                    id='byCentury'
                    name='byCentury'
                    {...register("byCentury")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Century"  />
            </div> 
            
           {/* <div>
                <label htmlFor="byYearAround" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year Around</label>
                <input
                    type="number"
                    id='byYearAround'
                    name='byYearAround'
                    {...register("byYearAround")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Year Around"  />
            </div>  */}



            <div className="col-span-full">
                <label htmlFor="additionalDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Details</label>
                <textarea id="additionalDetails" name='additionalDetails' {...register("additionalDetails")}  rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write additional detailes here..."></textarea>
            </div>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</>
  )
}

export default CreateForm