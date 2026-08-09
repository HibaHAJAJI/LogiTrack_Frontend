import ProduitsService from "../services/ProduitsService";
import { useState,useEffect } from "react";
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
  TextField,
} from "@mui/material";


function ProduitsList(){

    const[produits,setProduits]=useState([]);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [typeRecherche, setTypeRecherche] = useState("categorie");


    const laodingProduit = async ()=>{
         try {
          let data;

        if (search === "") {
            data = await ProduitsService.getAll();

         } else if (typeRecherche === "categorie") {

            data = await ProduitsService.getByCategory(search);
         }

         setProduits(data.content || []);   

         } catch (error) {
        console.log(error);
        }
    }

        useEffect(()=>{

           const fetchProduits= async ()=>{

              await  laodingProduit();
            }
            fetchProduits();
           
        },[search,typeRecherche])


   return (

        <Container maxWidth="lg" sx={{ mt: 4 }}>

            <Box
    sx={{
        display: "flex",
        gap: 2,
        mb: 3,
        alignItems: "center"
    }}
>

    <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher..."
    />

    <TextField
        select
        value={typeRecherche}
        onChange={(e) => setTypeRecherche(e.target.value)}
        SelectProps={{
            native: true
        }}
        sx={{
            width: 180
        }}
    >

        <option value="categorie">
            Catégorie
        </option>

        <option value="prix">
            Prix
        </option>

    </TextField>

</Box>
            <Paper
                elevation={0}
                sx={{
                    border: "1px solid #e2e8f0",
                    borderRadius: 3,
                    overflow: "hidden",
                }}  >
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
                                    Nom
                                </TableCell>

                                <TableCell
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                    }}
                                >
                                    Prix
                                </TableCell>

                                <TableCell
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                    }}
                                >
                                    Stock
                                </TableCell>

                                <TableCell
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                    }}
                                >
                                    Catégorie
                                </TableCell>

                            </TableRow>

                        </TableHead>


                        <TableBody>

                            {produits.map((produit) => (

                                <TableRow
                                    key={produit.id}
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
                                        {produit.id}
                                    </TableCell>


                                    <TableCell
                                        sx={{
                                            fontSize: "18px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {produit.nom}
                                    </TableCell>


                                    <TableCell
                                        sx={{
                                            fontSize: "16px",
                                        }}
                                    >
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


                                    <TableCell
                                        sx={{
                                            fontSize: "16px",
                                        }}
                                    >
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
                onSuccess={laodingProduit}
            />

        </Container>
    );
}

export default ProduitsList;