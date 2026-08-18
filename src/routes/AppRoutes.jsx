import { Routes, Route, Outlet } from "react-router-dom";

import Login from "../pages/public/login/Login";
import Register from "../pages/public/Register";
import Dashboard from "../pages/private/Dashboard";

import NotFound from "../components/NotFound";
import NavbarPublic from "../components/navbar/NavbarPublic";
import NavbarPrivate from "../components/navbar/NavbarPrivate";
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



const PublicLayout = () => {
  return (
    <>
      <NavbarPublic />
      <Outlet />
    </>
  );
};



const PrivateLayout = () => {
  return (
    <>
      <NavbarPrivate />
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

      <Route element={<PublicLayout />}>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>


      <Route element={<AuthGuard />}>
        <Route element={<PrivateLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/clients"
            element={<Clients />}
          />

          <Route
            path="/clients/add"
            element={<ClientForm />}
          />

          <Route
            path="/clients/:id"
            element={<ClientDetails />}
          />

          <Route
            path="/produits"
            element={<Produits />}
          />

          <Route
            path="/produits/add"
            element={<ProduitForm />}
          />

          <Route
            path="/produits/:id"
            element={<ProduitDetails />}
          />

          <Route
            path="/commandes"
            element={<Commandes />}
          />

          <Route
            path="/commandes/add"
            element={<CommandesForm />}
          />

          <Route
            path="/commandes/:id"
            element={<CommandeDetails />}
          />

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