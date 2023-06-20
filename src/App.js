
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/Cart/Cart';
import{
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"

function App() {
 
  const Layout=()=>{
    return(
      <div className='app'>

      <Header/>
      <Outlet/>
    
     
      </div>

    )
  }

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
   
      ]
    },
  ]);

  return (
    <div>

     <RouterProvider router={router}/>
   
    </div>
  );
}


export default App;
