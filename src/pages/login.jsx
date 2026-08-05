import {useState} from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { Box,Paper, Button,TextField,Typography,} from "@mui/material";



const Login = ()=>{

  const [email, setEmail] = useState("");
  const[ password , setPassword] =useState("");
  const[loading , setLoading]=useState(false);
  const[error, setError]= useState("");


  const navigate = useNavigate();
  const { login } = useAuth();


  const handleSubmit = async (e) =>{

    e.preventDefault();
    setLoading(true);
    setError("");

  try{

    const response = await authService.login(email,password);

    if(response && response.token){

      const user = {

        id : response.id,
        email: response.email,
        role : response.role

      };

      login(user,response.token);

      navigate("/dashboard");
    }

    } catch (err){

      const message =
      err.response?.data?.message || "Nom d'utilisateur ou mot de passe incorrect.";
      setError(message);

    }finally{
       setLoading(false);
    }
  };


  return(

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
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={1}
        >
          LogiTrack
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Connexion à votre espace
        </Typography>

             {error && (
                <Typography
              color="error"
              textAlign="center"
              sx={{ mb: 2 }}
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
         </form>
      </Paper>
    </Box>
  );
}
  export default Login;





































