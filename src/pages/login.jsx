import { useState } from "react";
import authService from "../services/authService";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Paper,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");        

  
      const response = await authService.login(email, password);
     

      if (response && response.token) {
        navigate("/dashboard");
      
      }
      setLoading(false);
    
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 1,
            fontWeight: "bold",
          }}
        >
          LogiTrack
        </Typography>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mb: 3,
          }}
          color="text.secondary"
        >
          Connexion à votre espace
        </Typography>

        {error && (
          <Typography
            color="error"
            sx={{
              textAlign: "center",
              mb: 2,
            }}
          >
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Mot de passe"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </Button>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mt: 2,
            }}
          >
            Vous n'avez pas encore de compte ?{" "}
            <MuiLink
              component={RouterLink}
              to="/register"
              underline="hover"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Créer un compte
            </MuiLink>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;