import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();


     return (
        <Box
            sx={{
                minHeight: "70vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 3,
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "80px", md: "120px" },
                    fontWeight: 700,
                    color: "#f3083e",
                    lineHeight: 1,
                }}
            >
                404
            </Typography>

            <Typography
                variant="h4"
                fontWeight={600}
                sx={{ mt: 2 }}
            >
                Page introuvable
            </Typography>

            <Typography
                color="text.secondary"
                sx={{ mt: 1, mb: 3 }}
            >
                Désolé, la page que vous recherchez n'existe pas.
            </Typography>

            <Button
                variant="contained"
                onClick={() => navigate("/dashboard")}
                sx={{
                    borderRadius: 2,
                    px: 3,
                    textTransform: "none",
                }}
            >
                Retour au dashboard
            </Button>
        </Box>
    );
}

export default NotFound;