import { getUser } from "../util/localStorageUtils"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useCreateArtifactMutation } from "../../feature/api/artifact-api/useArtifactQuery";

const CreateBySpecific = () => {

  const navigate = useNavigate()
  const user = getUser()

  
  const { register, handleSubmit, formState:{isValid} } = useForm();
  const { isLoading, mutate} = useCreateArtifactMutation();

  if(!user){
    navigate('/login')
  }

  const send = (data) => {
    console.log(data)
    mutate(data)  
  }

  const isButtonDisabled = !isValid || isLoading



  return (
     <div className="my-12 px-52">
    <h2 className="text-4xl font-bold text-gray-600">Create Artifact By Specific Year</h2>
   
   
    <form onSubmit={handleSubmit(send)} className="mt-10">
    <div className="grid gap-2 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="objectIdNo" className="block my-4 text-base font-semibold text-slate-600">Accession ID</label>
            <input
                type="text"
                id="objectIdNo"
                name='objectIdNo'
                {...register("objectIdNo")}
                className="border text-gray-800 text-base rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Ex. 2019.1.1" required />
        </div>
        <div>
            <label htmlFor="objectName" className="block my-4 text-base font-semibold text-slate-600">Object Name</label>
            <input
                type="text"
                id="objectName"
                name='objectName'
                {...register("objectName")}
                className="border text-gray-800 text-base rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Ex. Church Bell" required />
        </div>

        <div>
            <label htmlFor="location" className="block my-4 mb-2 text-base font-semibold text-slate-600">Location</label>
            <input
                type="text"
                id='location'
                name='location'
                {...register("location")}
                className="border text-gray-800 text-base rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Ex. Door" />
        </div>


     

        <div>
            <label htmlFor="month" className="block my-4 mb-2 text-base font-semibold text-slate-600">Month</label>
            <input
                type="text"
                id='month'
                name='month'
                {...register("month")}
                className="border text-gray-800 text-base rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Ex. August"/>
        </div>  
        <div>
            <label htmlFor="day" className="block my-4 text-base font-semibold text-slate-600">Day</label>
            <input
                type="number"
                id='day'
                name='day'
                {...register("day")}
                className="border text-gray-800 text-base rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Ex. 30"/>
        </div>  
       <div>
            <label htmlFor="specificYear" className="block my-4 text-base font-semibold text-slate-600">Specific Year</label>
            <input
                type="number"
                id='specificYear'
                name='specificYear'
                {...register("specificYear")}
                className="border text-gray-800 text-base rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Ex. 2023"  />
                <p className="mt-1 text-xs font-normal text-right text-gray-600">Only 4 digit number</p>
        </div>

      

        <div className="col-span-full">
            <label htmlFor="additionalDetails" className="block my-4 mb-2 text-base font-semibold text-slate-600">Additional Details</label>
            <textarea id="additionalDetails" name='additionalDetails' {...register("additionalDetails")}  rows="4" className="border text-gray-800 text-base rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Write additional details here..."></textarea>
        </div>
    </div>
    <button
      type="submit"
      className="text-white bg-gray-700 transition-all hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-base w-full px-5 py-2.5 text-center dark:focus:ring-blue-800"
      disabled={isButtonDisabled}
    >
      {isLoading ? 'Submitting...' : 'Submit'}
    </button>
</form>
</div>
  )
}

export default CreateBySpecific