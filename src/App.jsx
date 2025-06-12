import{createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css'
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />
},
 {
  path:'/about',
  element:(<div>
              <hi>This is About page open now</hi>
              <hi>what are you thinking today</hi>
            </div>)
  }
])

function App() {
  return <RouterProvider router={router}/>
};

export default App
