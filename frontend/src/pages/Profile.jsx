import { useNavigate } from 'react-router-dom'
import { logout } from '../feature/api/auth-api/useAuthMutation'

function Profile() {

    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate()


    const onLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <>
           
                <img className="w-24 h-24 mx-auto rounded-full" src={process.env.PUBLIC_URL + '/user.jpg'} alt="" width="384" height="512" />
                <div className="pt-6 space-y-4 text-center">
                    <figcaption className="font-medium">
                        <div className="text-xl text-sky-500 dark:text-sky-400">
                            {user.data.user.name}
                        </div>
                        <div className='text-slate-700 dark:text-slate-500'>
                            {user.data.user.position}
                        </div>
                    </figcaption>
                </div>

                <div className='mt-10'>
                    <button onClick={onLogout} className='w-full justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>Log out</button>
                </div>
         
        </>
    )
}

export default Profile