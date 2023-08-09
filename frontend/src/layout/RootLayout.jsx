import { NavLink, Outlet } from 'react-router-dom'

import { ReactComponent as ArtifactsIcon } from '../assets/artifact.svg'
import { ReactComponent as CreateArtifactIcon } from '../assets/create.svg'
import { ReactComponent as CollectionsIcon } from '../assets/collection.svg'


import { ReactComponent as AboutIcon } from '../assets/about.svg'

//Component
import Avatar from "../components/Avatar"
import Brand from "../components/Brand";
import Create from '../components/Create'

function RootLayout() {






    const menuItems = [
        { title: 'Artifacts', url: '/', icon: <ArtifactsIcon /> },
        { title: 'Collections', url: '/collections', icon: <CollectionsIcon /> },
        { title: 'About', url: '/about', icon: <AboutIcon /> },
      ];




    return (
        <nav className="flex h-screen">
            <div className="flex-none hidden w-64 text-white bg-gray-900 sm:block">
                <div>
                    <Brand name={"Nuestra Senora de Salvacion Historical and Ecclesiastical Museum"} imgUrl={process.env.PUBLIC_URL + '/logo.jpg'} />
                </div>

                <div className="px-2 py-4">

                <Create title={'Create Artifact'} icon={<CreateArtifactIcon />}/>
                    <ul>
                        {menuItems.map((item, i) => (
                            <li key={item.title} className="mb-2 transition-colors duration-200 ease-in-out ">
                                <NavLink to={item.url} className="block px-2 py-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 hover:transition hover:duration-300">
                                  <div className='flex align-baseline'>
                                    <p className='pt-0.5 mr-2 '>
                                    {item.icon}
                                    </p>
                                    
                                    {item.title}
                                
                                  </div>    
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <Avatar imgUrl={process.env.PUBLIC_URL + '/user.jpg'} />
            </div>

            <div className="flex-1 px-2 py-2 overflow-y-auto">
                <Outlet />
            </div>
        </nav>
    )
}

export default RootLayout