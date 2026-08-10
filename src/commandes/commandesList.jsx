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
            <Box
                sx={{
                    mb: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >

                <Typography
                    variant="h4"
                    fontWeight={500}
                >
                    Liste des commandes
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                    sx={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                        px: 3,
                        py: 1.2,
                        borderRadius: 1,
                    }}
                >
                    + Ajouter une commande
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