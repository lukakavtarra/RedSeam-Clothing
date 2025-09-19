import './App.css'

import { QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CatalogList, TestQuery, queryClient } from "./assets/Queries/Queries";


import Login from "./assets/Login/Login";
import Catalog from "./assets/Catalog/Catalog";
import NavBar from './assets/NavBar/NavBar';

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Register from './assets/Register/Register';


function App() {
  return (
    <div className="App">
      
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <NavBar />

          {/* <Login /> */}
          
          {/* <Catalog /> */}
          <ReactQueryDevtools />
       
        <Routes>
          <Route path='/' element={<Catalog />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
        </BrowserRouter>

      </QueryClientProvider>

    </div>
  );
}

export default App;
