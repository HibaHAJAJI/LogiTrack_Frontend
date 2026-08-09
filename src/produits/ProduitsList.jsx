import ProduitsService from "../services/ProduitsService";
import { useState,useEffect } from "react";
import ProduitForm from "./ProduitForm";

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


function ProduitsList(){

    const[produits,setProduits]=useState([]);
    const [open, setOpen] = useState(false);



    const laodingProduit = async ()=>{

        try{
              const data = await ProduitsService.getAll();
              setProduits(data.content ||[]);
        }catch(error){
            console.log(error);
        }      

        }

        useEffect(()=>{

           const fetchProduits= async ()=>{

              await  laodingProduit();
            }
            fetchProduits();
           
        },[])


 return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>

      <Box
        sx={{
          mb: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            mb: 1.5,
          }}
        >
          Liste des produits
        </Typography>

        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#1976d2",
            px: 2.5,
            py: 1.2,
            fontSize: "16px",
            fontWeight: 500,
            borderRadius: 1,
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          ＋ &nbsp; AJOUTER UN PRODUIT
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
                <TableCell sx={{ fontWeight: 700, fontSize: "16px", py: 2.5 }}>
                  ID
                </TableCell>

                <TableCell sx={{ fontWeight: 700, fontSize: "16px" }}>
                  Nom
                </TableCell>

                <TableCell sx={{ fontWeight: 700, fontSize: "16px" }}>
                  Prix
                </TableCell>

                <TableCell sx={{ fontWeight: 700, fontSize: "16px" }}>
                  Stock
                </TableCell>

                <TableCell sx={{ fontWeight: 700, fontSize: "16px" }}>
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
                  <TableCell sx={{ fontSize: "16px", py: 3 }}>
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

                  <TableCell sx={{ fontSize: "16px" }}>
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

                  <TableCell sx={{ fontSize: "16px" }}>
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