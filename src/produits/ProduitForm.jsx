import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ProduitsService from "../services/ProduitsService";
import { yupResolver } from "@hookform/resolvers/yup";
import ProduitShema from "../validation/ProduitShema";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
} from "@mui/material";

function ProduitForm({ open,onClose,onSuccess}){

    const{
        register,
        handleSubmit,
        reset,
        formState : {errors,isSubmitting },   
    } =useForm({
        resolver: yupResolver(ProduitShema),
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
            await ProduitsService.create(data);

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
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">

      <DialogTitle>
        Ajouter un produit
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>

        <DialogContent>

          <Stack spacing={2} sx={{ mt: 1 }}>

            <TextField
              label="Nom"
              fullWidth
              {...register("nom")}
              error={!!errors.nom}
              helperText={errors.nom?.message}
            />

            <TextField
              label="Catégorie"
              fullWidth
              {...register("categorie")}
              error={!!errors.categorie}
              helperText={errors.categorie?.message}
            />

            <TextField
              label="Prix"
              type="number"
              fullWidth
              {...register("prix")}
              error={!!errors.prix}
              helperText={errors.prix?.message}
            />

            <TextField
              label="Quantité en stock"
              type="number"
              fullWidth
              {...register("quantiteStock")}
              error={!!errors.quantiteStock}
              helperText={errors.quantiteStock?.message}
            />

          </Stack>

        </DialogContent>

        <DialogActions sx={{ p: 2 }}>

          <Button
            onClick={onClose}
            disabled={isSubmitting}
          >
            Annuler
          </Button>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enregistrement..." : "Ajouter"}
          </Button>

        </DialogActions>

      </form>

    </Dialog>
  );
}

export default ProduitForm;