import { Modal } from "./Modal/Modal"
import { useState } from "react"
import CreateSelection from "./CreateSelection"


const Create = ({title, icon}) => {

  const [showModal1, setShowModal1] = useState(false)
  return (
    <>
        
         <div className="mb-2 transition-colors duration-200 ease-in-out cursor-pointer" onClick={() => setShowModal1(!showModal1)}>
                <div className="block px-2 py-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 hover:transition hover:duration-300">
             
                        <div className='flex align-baseline'>
                        <p className='pt-0.5 mr-2 '>{icon}</p>   
                             
                            {title}    
                        </div> 
                </div>
         </div>

         <Modal isVisible={showModal1} onClose={() => setShowModal1(!showModal1)} width={'w-1/2'} title={'Create Artifact'}>
          <CreateSelection onClose={() => setShowModal1(!showModal1)}/>
        </Modal>
      
    </>
  )
}

export default Create