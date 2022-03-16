import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {About, Home} from '../pages';

const MainRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
  </BrowserRouter>
)

export default MainRouter;