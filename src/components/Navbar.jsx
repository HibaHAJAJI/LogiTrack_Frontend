import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";

const Navbar = () => {
  return (
   <AppBar
        position="fixed"
        elevation={1}
        sx={{
            backgroundColor: "#a2e5b8",
            zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
         <RouteIcon  sx={{   color: "#0c264e",   fontSize: 28, }}/> 
         <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    letterSpacing: "1px",
                    color: "#e7f3f4",
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