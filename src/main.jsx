import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProductDetails from './ProductDetails.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactUs from './ContactUs.jsx';
import Root from './routes/Root.jsx';
import Cart from './Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },  
      {
        path: "/cart",
        element: <Cart />,
      }  
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
