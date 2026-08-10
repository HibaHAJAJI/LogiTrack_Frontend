import ProduitsService from "../services/ProduitsService";
import { useState, useEffect } from "react";
import ProduitForm from "./ProduitForm";
import SearchBar from "../components/SearchBar";

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
    Button,
} from "@mui/material";

function ProduitsList() {

    const [produits, setProduits] = useState([]);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchProduits = async () => {

            try {

                let data;

                if (search.trim() === "") {
                    data = await ProduitsService.getAll();

                } else {
                    data = await ProduitsService.getByCategory(
                        search.trim()
                    );
                }

                setProduits(data.content || []);

            } catch (error) {
                console.log(error);
                setProduits([]);
            }
        };

        fetchProduits();

    }, [search]);


    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                    }}
                >
                    Liste des produits
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                >
                    ＋ Ajouter un produit
                </Button>
            </Box>
            <Box
                sx={{
                    mb: 3,
                }}
            >
                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Rechercher par catégorie..."
                />
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

                                <TableCell sx={{ fontWeight: 700 }}>
                                    ID
                                </TableCell>

                                <TableCell sx={{ fontWeight: 700 }}>
                                    Nom
                                </TableCell>

                                <TableCell sx={{ fontWeight: 700 }}>
                                    Prix
                                </TableCell>

                                <TableCell sx={{ fontWeight: 700 }}>
                                    Stock
                                </TableCell>

                                <TableCell sx={{ fontWeight: 700 }}>
                                    Catégorie
                                </TableCell>

                            </TableRow>

                        </TableHead>


                        <TableBody>

                            {produits.map((produit) => (

                                <TableRow
                                    key={produit.id}
                                    hover
                                >

                                    <TableCell>
                                        {produit.id}
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            fontWeight: 500,
                                        }}
                                    >
                                        {produit.nom}
                                    </TableCell>

                                    <TableCell>
                                        {produit.prix} DH
                                    </TableCell>

                                    <TableCell>

                                        <Box
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",

                                                backgroundColor:
                                                    produit.quantiteStock <= 10
                                                        ? "#f97316"
                                                        : "#2e7d32",

                                                color: "white",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {produit.quantiteStock}
                                        </Box>

                                    </TableCell>

                                    <TableCell>
                                        {produit.categorie}
                                    </TableCell>

                                </TableRow>

                            ))}

                        </TableBody>

                    </Table>

                </TableContainer>

                {produits.length === 0 && (

                    <Box
                        sx={{
                            py: 5,
                            textAlign: "center",
                        }}
                    >
                        <Typography color="text.secondary">
                            Aucun produit trouvé.
                        </Typography>
                    </Box>

                )}

            </Paper>
            <ProduitForm
                open={open}
                onClose={() => setOpen(false)}
                onSuccess={() => {
                    setOpen(false);
                    
                    ProduitsService.getAll().then((data) => {
                        setProduits(data.content || []);
                    });
                }}
            />

        </Container>
    );
}

export default ProduitsList;