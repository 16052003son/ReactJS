import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './siderbar/siderbar';
import Account from './pages/Account/Index'; // Đảm bảo đường dẫn này đúng
import AddAccount from './pages/Account/Add';


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          {/* Các route khác */}
          <Route path="/account" element={<Account />} /> {/* Thay đổi ở đây */}
          <Route path="/account/Add" element={< AddAccount/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
