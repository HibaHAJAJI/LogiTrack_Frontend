import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Chip,
} from "@mui/material";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboard();
        setDashboard(data);
      } catch (error) {
        console.error("Erreur chargement dashboard :", error);
      }
    };

    fetchDashboard();
  }, []);

  if (!dashboard) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const stats = [
    {
      title: "Clients",
      value: dashboard.totalClients,
      icon: <GroupsOutlinedIcon />,
      color: "#2563eb",
      background: "#eff6ff",
    },
    {
      title: "Produits",
      value: dashboard.totalProduits,
      icon: <Inventory2OutlinedIcon />,
      color: "#16a34a",
      background: "#f0fdf4",
    },
    {
      title: "Commandes",
      value: dashboard.totalCommandes,
      icon: <ShoppingCartOutlinedIcon />,
      color: "#7c3aed",
      background: "#f5f3ff",
    },
    {
      title: "En attente",
      value: dashboard.commandesEnAttente,
      icon: <AccessTimeIcon />,
      color: "#ea580c",
      background: "#fff7ed",
    },
    {
      title: "Expédiées",
      value: dashboard.commandesExpediees,
      icon: <LocalShippingIcon />,
      color: "#0284c7",
      background: "#f0f9ff",
    },
    {
      title: "Livrées",
      value: dashboard.commandesLivrees,
      icon: <CheckCircleIcon />,
      color: "#16a34a",
      background: "#f0fdf4",
    },
  ];

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f8fafc",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={600}>
          Tableau de bord
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          Bienvenue voici un aperçu de votre activité.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {stats.map((stat) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
            key={stat.title}
          >
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                border: "1px solid #e2e8f0",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: stat.background,
                    color: stat.color,
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {stat.title}
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={600}
                  sx={{ mt: 0.5 }}
                >
                  {stat.value ?? 0}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5} sx={{ mt: 1 }}>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              border: "1px solid #e2e8f0",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ mb: 2 }}
              >
                Produit le plus commandé
              </Typography>

              <Typography
                variant="h5"
                color="primary"
                fontWeight={600}
              >
                {dashboard.produitPlusCommande || "Aucun produit"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              border: "1px solid #e2e8f0",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <WarningAmberIcon color="warning" />

                <Typography
                  variant="h6"
                  fontWeight={600}
                >
                  Stock faible
                </Typography>
              </Box>

              <Typography
                variant="h4"
                fontWeight={600}
                color="warning.main"
              >
                {dashboard.produitsStockFaible ?? 0}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                produits avec un stock inférieur ou égal à 10
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              border: "1px solid #e2e8f0",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ mb: 2 }}
              >
                État des commandes
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    En attente
                  </Typography>

                  <Chip
                    label={dashboard.commandesEnAttente ?? 0}
                    color="warning"
                    size="small"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    Expédiées
                  </Typography>

                  <Chip
                    label={dashboard.commandesExpediees ?? 0}
                    color="info"
                    size="small"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    Livrées
                  </Typography>

                  <Chip
                    label={dashboard.commandesLivrees ?? 0}
                    color="success"
                    size="small"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;