import CommandesService from "../services/CommandesService";
import { useEffect,useState } from "react";
import CommandesForm from "./CommandesForm";
import {
    Container,
    Paper,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Box,
    Chip,
    Button,
} from "@mui/material";



function CommandesList(){

    const[commandes,setCommandes]=useState([]);
    const [open, setOpen] = useState(false);


    const laodingCommandes= async()=>{

        try{
         const data = await CommandesService.getAll();
            setCommandes(data.content ||[]);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        const fetchCommandes = async()=>{
            await laodingCommandes();
        }
        fetchCommandes();
    },[])

    
 return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box sx={{ mb: 3 }}>
    <Typography
        variant="h4"
        sx={{
            fontSize: "36px",
            fontWeight: 400,
            mb: 2,
        }}
    >
        Liste des commandes
    </Typography>

    <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{
            backgroundColor: "#1976d2",
            textTransform: "uppercase",
            fontSize: "16px",
            fontWeight: 500,
            px: 3,
            py: 1.3,
            borderRadius: "4px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
            "&:hover": {
                backgroundColor: "#1565c0",
            },
        }}
    >
        + &nbsp; AJOUTER UNE COMMANDE
    </Button>
</Box>


            <Paper
                elevation={0}
                sx={{
                    border: "1px solid #e2e8f0",
                    borderRadius: 3,
                    overflow: "hidden",
                }}
            >

                <TableContainer>
                    <Table>

                        <TableHead>

                            <TableRow
                                sx={{
                                    backgroundColor: "#f8fafc",
                                }}
                            >

                                <TableCell
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        py: 2.5,
                                    }}
                                >
                                    ID
                                </TableCell>

                                <TableCell
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                    }}
                                >
                                    Client ID
                                </TableCell>

                                <TableCell
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                    }}
                                >
                                    Date commande
                                </TableCell>

                                <TableCell
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                    }}
                                >
                                    Statut
                                </TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {commandes.map((commande) => (

                                <TableRow
                                    key={commande.id}
                                    hover
                                    sx={{
                                        "&:last-child td": {
                                            borderBottom: 0,
                                        },
                                    }}
                                >

                                    <TableCell
                                        sx={{
                                            fontSize: "16px",
                                            py: 3,
                                        }}
                                    >
                                        {commande.id}
                                    </TableCell>


                                    <TableCell
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {commande.clientId}
                                    </TableCell>


                                    <TableCell
                                        sx={{
                                            fontSize: "16px",
                                        }}
                                    >
                                        {commande.dateCommande}
                                    </TableCell>

                                    <TableCell>

                                        <Chip
                                            label={commande.statut}
                                            size="small"
                                            color={
                                                commande.statut === "LIVREE"
                                                    ? "success"
                                                    : commande.statut === "EXPEDIEE"
                                                    ? "info"
                                                    : "warning"
                                            }
                                            sx={{
                                                fontWeight: 500,
                                            }}
                                        />

                                    </TableCell>

                                </TableRow>

                            ))}

                        </TableBody>

                    </Table>
                </TableContainer>


                {commandes.length === 0 && (

                    <Box
                        sx={{
                            py: 5,
                            textAlign: "center",
                        }}
                    >

                        <Typography color="text.secondary">
                            Aucune commande trouvée.
                        </Typography>

                    </Box>

                )}

            </Paper>

            <CommandesForm
                open={open}
                onClose={() => setOpen(false)}
                onSuccess={laodingCommandes}
            />

        </Container>
    );
}

export default CommandesList;