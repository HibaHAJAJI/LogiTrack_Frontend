import { Routes, Route , Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/register";
import Dashboard from "../pages/Dashboard";


import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NotFound  from "../components/NotFound";


import Clients from "../clients/ClientList"
import ClientDetails from "../clients/ClientDetails";

import Produits from "../produits/ProduitsList";
import ProduitDetails from "../produits/ProduitsDetails";

import Commandes from "../commandes/commandesList";
import CommandeDetails from "../commandes/CommandeDetails";


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

      <Route path="/clients" element={ <MainLayout>   <Clients />  </MainLayout>}/> 
      <Route  path="/clients/:id"  element={<ClientDetails />}/>

      <Route path="/produits"  element={ <MainLayout><Produits/></MainLayout>}/>
      <Route path="/products/:id" element={<ProduitDetails />}
/>
      <Route path="/commandes"  element={ <MainLayout><Commandes/></MainLayout>}/>
      <Route path="/commandes/:id" element={<CommandeDetails />}/>




     <Route path="*" element ={<NotFound/>}/>

     </Routes>
  );
};

export default AppRoutes;