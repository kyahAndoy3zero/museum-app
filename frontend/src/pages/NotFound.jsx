import React from 'react'
import { ReactComponent as ErrorNotFound } from '../assets/404.svg'


function NotFound() {
    return (
        <div className='flex justify-center'>
            <ErrorNotFound />
        </div>
    )
}


export default NotFound
