import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import DevApp from './pages/DevApp';
import Products from './pages/Products';
import ProductsDev from './pages/ProductsDev';
import 'react-loading-skeleton/dist/skeleton.css'
import './App.scss';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "/ohpolly-dev",
      element: (
        <DevApp />
      ),
    },
    {
      path: "/products/:query",
      element: <Products/>,
    },
    {
      path: "/products-dev/:query",
      element: <ProductsDev/>,
    }
  ]);
  return <RouterProvider router={router} />
};

export default App;