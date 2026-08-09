
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CommandesService from "../services/CommandesService";
import { yupResolver } from "@hookform/resolvers/yup";
import CommandesShema from "../validation/CommandesShema";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Stack,
    MenuItem,
} from "@mui/material";



function CommandesForm({ open,onClose,onSuccess}){

    const{
        register,
        handleSubmit,
        reset,
        formState : {errors,isSubmitting },   
    } =useForm({
        resolver: yupResolver(CommandesShema),
        defaultValues: {
                nom:"",
                categorie:"",
                prix:"",
                quantiteStock:"",
        }
       
    });
     

    useEffect(()=>{
        if(open){
            reset({
                nom:"",
                categorie:"",
                prix:"",
                quantiteStock:"", 
            });
        }
    },[open,reset]);

    const onSubmit  = async (data)=>{
        try{
            await CommandesService.create(data);

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

            <DialogTitle>
                Ajouter une commande
            </DialogTitle>

            <DialogContent>

                <Stack spacing={2.5} sx={{ mt: 1 }}>

                    <TextField
                        label="Date de commande"
                        type="date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        {...register("dateCommande")}
                        error={!!errors.dateCommande}
                        helperText={errors.dateCommande?.message}
                    />

=                    <TextField
                        label="ID Client"
                        type="number"
                        fullWidth
                        {...register("clientId")}
                        error={!!errors.clientId}
                        helperText={errors.clientId?.message}
                    />

                    <TextField
                        select
                        label="Statut"
                        fullWidth
                        defaultValue="EN_ATTENTE"
                        {...register("statut")}
                        error={!!errors.statut}
                        helperText={errors.statut?.message}
                    >

                        <MenuItem value="EN_ATTENTE">
                            En attente
                        </MenuItem>

                        <MenuItem value="EXPEDIEE">
                            Expédiée
                        </MenuItem>

                        <MenuItem value="LIVREE">
                            Livrée
                        </MenuItem>

                    </TextField>

                </Stack>

            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 2 }}>

                <Button
                    onClick={onClose}
                    disabled={isSubmitting}
                >
                    Annuler
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Enregistrement..." : "Ajouter"}
                </Button>

            </DialogActions>

        </Dialog>
    );
}

export default CommandesForm;