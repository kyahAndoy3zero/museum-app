import { getUser } from "../components/util/localStorageUtils"
import { useNavigate } from 'react-router-dom'

function About() {

    const navigate = useNavigate()
    const user = getUser()

    if(!user){
        navigate('/login')
    }

    
    return (
        <>
            <div className="my-12 px-52">
                <h2 className="text-5xl font-bold text-gray-600">Nuestra Señora de Salvacion Historical and Ecclesiastical Museum</h2>
                <div className="mt-4 tracking-wide md:text-justify sm:mt-8">
                    <p className="mb-3 text-lg font-normal text-gray-700">A plan of having a Museum was Initiated by Archt. Guillermo O. Adriatco Jr., the designer
                        of the Lavezares Catholic Church Expansion Project and Mr. Carl Jaimes Simple Bordeos, the curator and researcher of Christ the King College.</p>
                    <p className="mb-3 text-lg font-normal text-gray-700">
                        It was a humbling experience to collaborate with them. They supported me on my seminars and workshops in museology, archeology and musuem management. It was also supported by the former parish priest of Lavezares, Rev. Fr. Otillo P. Lobriño, Jr. After the reshuffling of the clergy of the diocese of Catarman, our parish moderator Rev. Fr. Prospero Elmo B. Cabili and Co Pastor Rev. Fr. Ryan Paul G. Opeña supported my advocacy in building the musuem. I was eager that I was trained to preserve the treasures of the parish. And I did not do anything about it that's why I talk to them and ask permission that I will collect and put up a museum. On the 124th parish day celebration, October 25, 2019, it finally opened for the parishioners and because of the expansion of our Mother Church it was relocated, last February 2020, to secure and preserve the artifacts. Now, we are ready to reopen with new collections and safety measures in this new normal through the benevolence of the Parishoners especially Fiscal Cesar Calubag, my friends, relatives, and especially to the youth cathechists who help me in building the museum.
                    </p>
                    <p className="mb-3 text-lg font-normal text-gray-700">
                        It is the first in Northern Samar and in the diocese of Catarman. Nothing can compare the joy in unraveling our cultural heritage. On August 22, 2020, we will be officialy and formally recognized by our diocese to be blessed by Most Rev. Angel T. Hobayan, D.D chairman on Commission on Culture the Vicar General of our diocese Rev. Msgr. Gaspar D. Balerite, H.P., S.Th.D.
                    </p>

                    <figcaption className="mt-10 font-medium text-left">
                    <div className="text-sky-500 dark:text-sky-400">
                        Ann-Jill T. Dineros
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Museum Curator
                    </div>
                    </figcaption>
                </div>
            </div>
        </>
    )
}

export default About