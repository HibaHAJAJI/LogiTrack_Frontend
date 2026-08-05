import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlinedIcon />,
    path: "/dashboard",
  },
  {
    text: "Clients",
    icon: <GroupsOutlinedIcon />,
    path: "/clients",
  },
  {
    text: "Produits",
    icon: <Inventory2OutlinedIcon />,
    path: "/produits",
  },
  {
    text: "Commandes",
    icon: <ShoppingCartOutlinedIcon />,
    path: "/commandes",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
          color: "#1e293b",
          borderRight: "1px solid #e2e8f0",
          top: "64px",
          height: "calc(100vh - 64px)",
        },
      }}
    >
      <Box
        sx={{
          overflow: "auto",
          px: 1.5,
          py: 2,
        }}
      >
        <List disablePadding>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ mb: 0.8 }}
              >
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    borderRadius: "10px",
                    py: 1.2,
                    px: 2,

                    backgroundColor: isActive
                      ? "#eff6ff"
                      : "transparent",

                    color: isActive
                      ? "#2563eb"
                      : "#475569",

                    "&:hover": {
                      backgroundColor: isActive
                        ? "#dbeafe"
                        : "#f8fafc",

                      color: isActive
                        ? "#1d4ed8"
                        : "#0f172a",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive
                        ? "#2563eb"
                        : "#64748b",

                      minWidth: 40,

                      "& .MuiSvgIcon-root": {
                        fontSize: 23,
                        strokeWidth: 1.5,
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "0.95rem",
                      fontWeight: isActive ? 600 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;