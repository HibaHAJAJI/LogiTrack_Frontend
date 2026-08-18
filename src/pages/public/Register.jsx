import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Button,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

import authService from "../../services/authService";
import { registerSchema } from "../../validation/register";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      role: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await authService.register(data);

      console.log("Register response :", response);

      setSuccess("Inscription réussie !");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error("Register error :", err);

      setError(
        err.response?.data?.message ||
          "Une erreur est survenue lors de l'inscription."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 450,
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 1,
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
          Créer votre compte
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

        {success && (
          <Typography
            color="success.main"
            sx={{
              textAlign: "center",
              mb: 2,
            }}
          >
            {success}
          </Typography>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Nom"
            margin="normal"
            {...register("nom")}
            error={!!errors.nom}
            helperText={errors.nom?.message}
          />

          <TextField
            fullWidth
            label="Prénom"
            margin="normal"
            {...register("prenom")}
            error={!!errors.prenom}
            helperText={errors.prenom?.message}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            label="Mot de passe"
            type="password"
            margin="normal"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            select
            fullWidth
            label="Rôle"
            margin="normal"
            defaultValue=""
            {...register("role")}
            error={!!errors.role}
            helperText={errors.role?.message}
          >
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="MANAGER">MANAGER</MenuItem>
            <MenuItem value="AGENT">AGENT</MenuItem>
          </TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? "Inscription..." : "Créer un compte"}
          </Button>

          <Button
            type="button"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => navigate("/login")}
          >
            Déjà un compte ? Se connecter
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;