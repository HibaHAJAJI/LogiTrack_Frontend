import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Typography,
    Button,
} from "@mui/material";

import produitService from "../services/ProduitsService";

function ProduitDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [produit, setProduit] = useState(null);

    useEffect(() => {

        const fetchProduit = async () => {

            try {

                const data = await produitService.getById(id);

                setProduit(data);

            } catch (error) {

                console.error(error);

            }
        };

        fetchProduit();

    }, [id]);


    if (!produit) {
        return <Typography>Chargement...</Typography>;
    }


    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>

            <Button
                variant="outlined"
                onClick={() => navigate("/products")}
                sx={{ mb: 3 }}
            >
                ← Retour
            </Button>

            <Paper sx={{ p: 4 }}>

                <Typography
                    variant="h4"
                    sx={{ mb: 3 }}
                >
                    Détails du produit
                </Typography>

                <Typography>
                    <strong>ID :</strong> {produit.id}
                </Typography>

                <Typography>
                    <strong>Nom :</strong> {produit.nom}
                </Typography>

                <Typography>
                    <strong>Prix :</strong> {produit.prix} DH
                </Typography>

                <Typography>
                    <strong>Stock :</strong> {produit.quantiteStock}
                </Typography>

                <Typography>
                    <strong>Catégorie :</strong> {produit.categorie}
                </Typography>

            </Paper>

        </Container>
    );
}

export default ProduitDetails;