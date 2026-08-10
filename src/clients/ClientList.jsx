import clientService from "../services/clientService";
import ClientForm from "./ClientForm";
import { useEffect,useState } from "react";
import Pagination from "../components/Pagination";
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
import DeleteButton from "../components/DeleteButton";
import { useNavigate } from "react-router-dom";



function ClientsList(){

    const [clients,setClients] = useState([]);
    const [open, setOpen] = useState(false);

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);


    const navigate = useNavigate();

      const loadClients = async()=>{

        try{
            
              const data = await clientService.getAll(page, 10);

              setClients(data.content || []);

              setTotalPages(data.totalPages || 0);

        }catch(error){
            console.error(error);

        }
    };


    const handleDelete = async(id)=>{

      try{

       await clientService.delete(id);
       await loadClients();

      }catch(error){
        console.log(error);

      }
    };


    useEffect(()=>{

             const fetchClients = async () => {
               await loadClients();
    };
              fetchClients();
    },[page]);

  

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
                <TableCell>ID</TableCell>
                <TableCell>Nom</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Téléphone</TableCell>
                <TableCell>Ville</TableCell>
                <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {clients.map((client) => (
                <TableRow key={client.id}>
                    <TableCell>{client.id}</TableCell>
                    <TableCell>{client.nom}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.telephone}</TableCell>
                    <TableCell>{client.ville}</TableCell>
                    <TableCell>
                    <DeleteButton
                      onDelete={() => handleDelete(client.id)}
                    />
                  </TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/clients/${client.id}`)}
                >
                    Consulter
                </Button>
                </TableRow>
                ))}
            </TableBody>
            </Table>
             <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
            <ClientForm
            open={open}
            onClose={() => setOpen(false)}
            onSuccess={loadClients}/>
      </Paper>
    </Container>
  );


}
export default ClientsList;