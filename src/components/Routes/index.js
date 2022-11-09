// Node modules.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Relative imports.
import './styles.css';
import Users from '../../pages/Users';
import EditUser from '../../pages/EditUser';
import Home from '../../pages/Home';

const CustomRouter = () => {
  return (
    <BrowserRouter>
      <main>
        {/* this is where a header would go */}
        <div className="page">
          <Routes>
            <Route path="/users" exact element={<Users />} />
            <Route path="/users/:email" exact element={<EditUser />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default CustomRouter;
