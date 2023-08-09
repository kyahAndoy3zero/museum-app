import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//pages
import Collections from './pages/Collections'
// import Gallery from './pages/Gallery'
import About from './pages/About'
import Artifacts from './pages/Artifacts'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


//components
import CollectionsOverview from './components/CollectionsOverview'
import ArtifactsDetails from './components/Artifact/ArtifactsDetails'
import CreateByCentury from './components/Create/CreateByCentury'
import CreateBySpecific from './components/Create/CreateBySpecific'
import CreateByYearAround from './components/Create/CreateByYearAround'


//layouts
import RootLayout from './layout/RootLayout'
import CollectionsLayout from './layout/CollectionsLayout'



function App() {


  const router = createBrowserRouter(
    createRoutesFromElements([

      <Route path="/login" element={<Login />} />,

      <Route path='/' element={<RootLayout />} >
        <Route index element={<Artifacts />} />
        <Route path="/artifact-details/:id" element={<ArtifactsDetails />} />

        <Route path="/create-artifact-by-century" element={<CreateByCentury />} />
        <Route path="/create-artifact-by-specific-year" element={<CreateBySpecific />} />
        <Route path="/create-artifact-by-year-around" element={<CreateByYearAround />} />


        <Route path="collections" element={<CollectionsLayout />}>
          <Route index element={<Collections />} />
          <Route path=":year" element={<CollectionsOverview />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    ])
  )

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
