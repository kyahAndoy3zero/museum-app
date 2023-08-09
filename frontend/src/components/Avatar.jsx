import React from 'react'
import {  useState } from 'react'
import { Modal } from './Modal/Modal'
import Profile from '../pages/Profile'
import { getUser } from './util/localStorageUtils'



function Avatar({ imgUrl }) {
    
    const user = getUser()
    const [showModal1, setShowModal1] = useState(false)

  
    return (
        <>
            {user && <div className="absolute bottom-0 left-0 ">
                <div className='flex items-center px-4 py-6'>
         
                    <img src={imgUrl} alt="Avatar" className="rounded-full" width={40}/>
                    

                    <div className='flex'>
                        <div className='block ml-4 text-sm '>
                        <button onClick={() => setShowModal1(!showModal1)}>  
                            <span className='text-sky-500 dark:text-sky-400 hover:underline'>{user.data.user.name}</span>
                        </button>
                            <p className='text-slate-700 dark:text-slate-500'>{user.data.user.role}</p>
                        </div>

                     
                    </div>
                </div>
            </div>
            
           
            
            }

            <Modal isVisible={showModal1} onClose={() => setShowModal1(!showModal1)} width={'w-1/4'}>
                <Profile />
            </Modal>

        </>
    );
}

export default Avatar