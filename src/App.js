
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import { productAndCartLoader } from './components/Loader/productAndCartLoader';
import Main from './components/Main';
import Orders from './components/Orders/Orders';
import Shop from './components/shop/Shop';

function App() {
  const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          {
             path:'/',
             loader:()=>{
              return fetch('products.json')

             },
             element:<Shop></Shop>
          },
          {
            path:'/shop',
            loader:()=>{
             return fetch('products.json')

            },
            element:<Shop></Shop>
         },
          {
            path:'/orders',
            loader:productAndCartLoader,
            element:<Orders></Orders>

            },
           


        
          {
            path:'/about',
            element:<About></About>
        },
          {
            path:'/inventory',
            element:<Inventory></Inventory>


          }
        ]
      
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
     {/* <Header></Header>
     <Shop></Shop> */}
     
    </div>
  );
}

export default App;
