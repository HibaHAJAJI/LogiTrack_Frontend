import { Routes, Route , Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/register";
import Dashboard from "../pages/Dashboard";


import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


import Clients from "../clients/ClientList"


 const MainLayout = ({children}) => {
    return(
     <>
      <Navbar />
      <Sidebar />

       <main style={{
          marginLeft: "240px",
          paddingTop: "64px",
         }}>
        {children}
      </main>

    </>
    );
  };

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element ={<Register />} />
      <Route path="/dashboard" element={ <MainLayout>     <Dashboard />    </MainLayout>  }  />
      <Route path="/clients" element={ <MainLayout>   <Clients />  </MainLayout>}/>  </Routes>
  );
};

export default AppRoutes;