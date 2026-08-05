import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      elevation={1} 
      sx={{ backgroundColor: "#117a36" }} 
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
         <RouteIcon  sx={{   color: "#0c264e",   fontSize: 28, }}/> 
         <Typography
                variant="h6"
                sx={{
                    fontWeight: 800,
                    letterSpacing: "1px",
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1.35rem",
                }}
                >
                Logi<span style={{ color: "#0c264e" }}>Track</span>
        </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;