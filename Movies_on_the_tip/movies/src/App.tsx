import React from 'react';


import {useRoutes, BrowserRouter as Router} from "react-router-dom"
import { Movies_in_theaters } from './components/Movies_in_theaters';
import { NavBar } from './components/navBar';
import { Home } from './components/Home';
function App() {
  <Home></Home>
   let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/Movies_in_theaters", element: <Movies_in_theaters /> }
      ]);
      return routes;
        
        
}

export default App;
