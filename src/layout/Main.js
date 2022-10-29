import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componentes/1-Navbar/Navbar';

const Main = () => {
    return (
        <div>
          <Navbar></Navbar> {/* this part fixed to all pages */}
          <Outlet></Outlet> {/* only change this part */}
        </div>
    );
};

export default Main;