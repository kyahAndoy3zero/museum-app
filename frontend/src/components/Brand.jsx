import { NavLink } from 'react-router-dom'


function Brand({ name, imgUrl }) {
    return (
        <>
            <div className='px-4 py-6 mb-4 text-center '>
                <NavLink to="/">
                    <img src={imgUrl} alt="Avatar" className="w-16 h-16 mx-auto mb-4 rounded-full" />
                </NavLink>
                <span className='text-gray-300'>{name}</span>
            </div>
        </>
    )
}

export default Brand
