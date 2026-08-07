import { useEffect } from "react";
import { useForm } from "react-hook-form";
import clientService from "../services/clientService";
import { yupResolver } from "@hookform/resolvers/yup";
import clientSchema from "../validation/ClientShema";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
} from "@mui/material";


function ClientForm({ open,onClose,onSuccess}){

    const{
        register,
        handleSubmit,
        reset,
        formState : {errors,isSubmitting },   
    } =useForm({
        resolver: yupResolver(clientSchema),
        defaultValues: {
                nom:"",
                email:"",
                telephone:"",
                ville:"",
        }
       
    });
     

    useEffect(()=>{
        if(open){
            reset({
                nom:"",
                email:"",
                telephone:"",
                ville:"", 
            });
        }
    },[open,reset]);

    const onSubmit  = async (data)=>{
        try{
            await clientService.create(data);

            reset();

            if(onSuccess){
                await onSuccess();
            }
            onClose();
        }catch(error){
            console.error(error);
        }
    }


  
return (
  <Dialog
    open={open}
    onClose={onClose}
    fullWidth
    maxWidth="sm"
  >
    <DialogTitle>Ajouter un client</DialogTitle>

    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField
            label="Nom"
            fullWidth
            {...register("nom")}
            error={!!errors.nom}
            helperText={errors.nom?.message}
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Téléphone"
            fullWidth
            {...register("telephone")}
            error={!!errors.telephone}
            helperText={errors.telephone?.message}
          />

          <TextField
            label="Ville"
            fullWidth
            {...register("ville")}
            error={!!errors.ville}
            helperText={errors.ville?.message}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Annuler
        </Button>

        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
        >
          Enregistrer
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);
}

export default ClientForm;