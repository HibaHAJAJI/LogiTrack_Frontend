import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/register";
import Dashboard from "../pages/Dashboard";

import NotFound from "../components/NotFound";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "../components/about/About";

import Clients from "../clients/ClientList";
import ClientDetails from "../clients/ClientDetails";
import ClientForm from "../clients/ClientForm";

import Produits from "../produits/ProduitsList";
import ProduitDetails from "../produits/ProduitsDetails";
import ProduitForm from "../produits/ProduitForm";

import Commandes from "../commandes/commandesList";
import CommandeDetails from "../commandes/CommandeDetails";
import CommandesForm from "../commandes/CommandesForm";

import AuthGuard from "../guard/AuthGuard";
import RoleGuard from "../guard/RoleGuard";

const ROLES = {
  ADMIN: "ROLE_ADMIN",
  MANAGER: "ROLE_MANAGER",
  AGENT: "ROLE_AGENT",
};

const READ_ROLES = [
  ROLES.ADMIN,
  ROLES.MANAGER,
  ROLES.AGENT,
];

const WRITE_ROLES = [
  ROLES.ADMIN,
  ROLES.MANAGER,
];


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main
        style={{
          marginLeft: "240px",
          paddingTop: "64px",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

const AppRoutes = () => {
  return (
    
    <Routes>
     <Route path="/" element={<About />} />

      <Route  path="/"  element={<Navigate to="/dashboard" replace />} />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route element={<AuthGuard />}>
        
        <Route element={<MainLayout />}>
          
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            element={
              <RoleGuard allowedRoles={READ_ROLES} />
            }
          >
            <Route
              path="/clients"
              element={<Clients />}
            />

            <Route
              path="/clients/:id"
              element={<ClientDetails />}
            />

            <Route path="/produits" element={<Produits />}/>

            <Route path="/produits/:id" element={<ProduitDetails />} />

            <Route path="/commandes"  element={<Commandes />}  />

            <Route
              path="/commandes/:id"
              element={<CommandeDetails />}
            />
          </Route>

          <Route
            element={
              <RoleGuard allowedRoles={WRITE_ROLES} />
            }
          >
            <Route
              path="/clients/add"
              element={<ClientForm />}
            />

            <Route
              path="/produits/add"
              element={<ProduitForm />}
            />

            <Route
              path="/commandes/add"
              element={<CommandesForm />}
            />
          </Route>

        </Route>
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;