import React from 'react'
import { Link } from 'react-router-dom'


const CreateSelection = ({onClose}) => {
  return (
    <>
    
    <div className="flex items-center justify-center h-96">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            
            <Link to="/create-artifact-by-century">
                <div className="flex items-center justify-center p-4 transition-all bg-gray-700 border-2 cursor-pointer rounded-xl w-60 h-60 hover:border-sky-500 hover:shadow-lg" onClick={() => onClose()}>
                <div>
                    <p className="text-2xl font-semibold">Century</p>
                </div>
                </div>
            </Link>
            <Link to="/create-artifact-by-specific-year">
                <div className="flex items-center justify-center p-4 transition-all bg-gray-700 border-2 cursor-pointer rounded-xl w-60 h-60 hover:border-sky-500 hover:shadow-lg" onClick={() => onClose()}>
                <div>
                    <p className="text-2xl font-semibold">Specific Year</p>
                </div>
                </div>
            </Link>
            <Link to="/create-artifact-by-year-around">
                <div className="flex items-center justify-center p-4 transition-all bg-gray-700 border-2 cursor-pointer rounded-xl w-60 h-60 hover:border-sky-500 hover:shadow-lg" onClick={() => onClose()}>
                <div>
                    <p className="text-2xl font-semibold">Year Around</p>
                </div>
                </div>
            </Link>
            
          
          </div>
     </div>
    </>
  )
}

export default CreateSelection