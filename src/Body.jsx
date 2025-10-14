
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Profile from './Profile'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Gallery from './Gallery'
import Contact from './Contact'

export const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Profile />,
    //   errorElement: <ErrorPage />
    },
    { 
      path: "/about",
      element: <About />,
      // errorElement: <ErrorPage />
    },
    { 
      path: "/skills",
      element: <Skills />,
      // errorElement: <ErrorPage />
    },
    { 
      path: "/project",
      element: <Project />,
      // errorElement: <ErrorPage />
    },
    { 
      path: "/gallery",
      element: <Gallery />,
      // errorElement: <ErrorPage />
    },
    { 
      path: "/contact",
      element: <Contact />,
      // errorElement: <ErrorPage />
    }
    
  ]);

return (
  <div>
    <RouterProvider router={appRouter} />
  </div>
)
}
