
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Typography,
    Button,
} from "@mui/material";

import CommandeService from "../services/CommandesService";

function CommandeDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [commande, setCommande] = useState(null);

    useEffect(() => {

        const fetchCommande = async () => {

            try {

                const data = await CommandeService.getById(id);

                setCommande(data);

            } catch (error) {

                console.error(error);

            }
        };

        fetchCommande();

    }, [id]);


    if (!commande) {
        return <Typography>Chargement...</Typography>;
    }
      return (
        <Container maxWidth="md" sx={{ mt: 4 }}>

            <Button
                variant="outlined"
                onClick={() => navigate("/orders")}
                sx={{ mb: 3 }}
            >
                ← Retour
            </Button>

            <Paper sx={{ p: 4 }}>

                <Typography
                    variant="h4"
                    sx={{ mb: 3 }}
                >
                    Détails de la commande
                </Typography>

                <Typography>
                    <strong>ID :</strong> {commande.id}
                </Typography>

                <Typography>
                    <strong>Client :</strong> {commande.clientId}
                </Typography>

                <Typography>
                    <strong>Date :</strong> {commande.dateCommande}
                </Typography>

                <Typography>
                    <strong>Statut :</strong> {commande.statut}
                </Typography>

            </Paper>

        </Container>
    );
}

export default CommandeDetails;
