import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom"

import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';
import Home from "./pages/Home";



const MyApp = () => {

  return (
    <div>
        <Navbar/>
          <div>
             <Outlet />
          </div>
        <Footer/>
    </div>
  )
}

const router = createBrowserRouter (
  [
    {
      element: <MyApp />,
      errorElement: <Error />,
      children: [ 
        { path: '/', element: <Home />,},
        { path: '/about', element: <Contact />},
        { path: '/notes', element: <Contact />},
        { path: '/contact', element: <Contact />},


      ]
    }
  ]
)

function App() {
  return (
    <div className="App text-slate-800 mx-auto [&_*]:ease-linear [&_*]:duration-200 bg-quartenary">
     <RouterProvider router = {router} />
    </div>
  );
}

export default App;

