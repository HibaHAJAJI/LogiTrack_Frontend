import ProduitsService from "../services/ProduitsService";
import { useState, useEffect } from "react";
import ProduitForm from "./ProduitForm";
import SearchBar from "../components/SearchBar";
import DeleteButton from "../components/DeleteButton";

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
    MenuItem,
    TextField,
} from "@mui/material";

function ProduitsList() {

    const [produits, setProduits] = useState([]);
    const [open, setOpen] = useState(false);

    const [search, setSearch] = useState("");
    const [typeRecherche, setTypeRecherche] = useState("categorie");


    const loadProduits = async () => {

        try {

            let data;

            if (search.trim() === "") {

                data = await ProduitsService.getAll();

            } else if (typeRecherche === "categorie") {

                data = await ProduitsService.getByCategory(
                    search.trim()
                );

            } else if (typeRecherche === "prix") {

                data = await ProduitsService.getByPrice(
                    search.trim()
                );
            }

            setProduits(data.content || []);

        } catch (error) {

            console.log(error);
            setProduits([]);

        }
    };

    useEffect(() => {

           const fetchProduits = async () => {
        loadProduits();
           }
               fetchProduits();

    }, [search, typeRecherche]);


    const handleDelete = async (id) => {

        try {

            await ProduitsService.delete(id);

            await loadProduits();

        } catch (error) {

            console.log(error);

        }
    };



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
                    display: "flex",
                    gap: 2,
                    mb: 3,
                    alignItems: "center",
                }}
            >

                <SearchBar
                    value={search}
                    onChange={(value) => setSearch(value)}
                    placeholder={
                        typeRecherche === "categorie"
                            ? "Rechercher par catégorie..."
                            : "Entrer un prix maximum..."
                    }
                />

                <TextField
                    select
                    value={typeRecherche}
                    onChange={(e) => setTypeRecherche(e.target.value)}
                    size="small"
                    sx={{
                        width: 180,
                    }}
                >

                    <MenuItem value="categorie">
                        Catégorie
                    </MenuItem>

                    <MenuItem value="prix">
                        Prix
                    </MenuItem>

                </TextField>

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
                                <TableCell sx={{ fontWeight: 700 }}>
                                    Action
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
                                    <TableCell>
                                    <DeleteButton
                                        onDelete={() => handleDelete(produit.id)}
                                    />
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