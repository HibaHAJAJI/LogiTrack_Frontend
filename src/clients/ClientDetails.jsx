import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Paper, Typography, Button } from "@mui/material";

import clientsService from "../services/clientService";

function ClientDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [client, setClient] = useState(null);

    useEffect(() => {

        const fetchClient = async () => {

            try {

                const data = await clientsService.getById(id);

                setClient(data);

            } catch (error) {

                console.error(error);

            }
        };

        fetchClient();

    }, [id]);


    if (!client) {
        return <Typography>Chargement...</Typography>;
    }


    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>

            <Button
                variant="outlined"
                onClick={() => navigate("/clients")}
                sx={{ mb: 3 }}
            >
                ← Retour
            </Button>

            <Paper sx={{ p: 4 }}>

                <Typography
                    variant="h4"
                    sx={{ mb: 3 }}
                >
                    Détails du client
                </Typography>

                <Typography>
                    <strong>ID :</strong> {client.id}
                </Typography>

                <Typography>
                    <strong>Nom :</strong> {client.nom}
                </Typography>

                <Typography>
                    <strong>Email :</strong> {client.email}
                </Typography>

                <Typography>
                    <strong>Téléphone :</strong> {client.telephone}
                </Typography>

                <Typography>
                    <strong>Ville :</strong> {client.ville}
                </Typography>

            </Paper>

        </Container>
    );
}

export default ClientDetails;