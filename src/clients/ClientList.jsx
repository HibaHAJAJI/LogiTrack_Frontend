import clientService from "../services/clientService";
import { useEffect,useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";



function ClientsList(){

    const [clients,setClients] = useState([]);

    useEffect(()=>{

         const loadClients = async()=>{

        try{
            const data = await clientService.getAll();
            setClients(data.content ||[]);

        }catch(error){
            console.error(error);

        }
    };

             loadClients();
    },[]);

  

     return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Liste des clients
        </Typography>

                <Table>
            <TableHead>
                <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Téléphone</TableCell>
                <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {clients.map((client) => (
                <TableRow key={client.id}>
                    <TableCell>{client.nom}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.telephone}</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
      </Paper>
    </Container>
  );


}
export default ClientsList;