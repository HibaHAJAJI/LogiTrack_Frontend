import clientService from "../services/clientService";
import ClientForm from "./ClientForm";
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
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";



function ClientsList(){

    const [clients,setClients] = useState([]);
    const [open, setOpen] = useState(false);

      const loadClients = async()=>{

        try{
            const data = await clientService.getAll();
            setClients(data.content ||[]);

        }catch(error){
            console.error(error);

        }
    };

    useEffect(()=>{

             const fetchClients = async () => {
    await loadClients();
  };

  fetchClients();
    },[]);

  

     return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Liste des clients
        </Typography>
             <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setOpen(true)}
                sx={{ mb: 2 }}
                >
                Ajouter un client
                </Button>

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
            <ClientForm
            open={open}
            onClose={() => setOpen(false)}
            onSuccess={loadClients}/>
      </Paper>
    </Container>
  );


}
export default ClientsList;