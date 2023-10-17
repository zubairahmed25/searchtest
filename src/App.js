import './App.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "/products/:query",
      element: <Products/>,
    },
  ]);
  return <RouterProvider router={router} />
};

export default App;