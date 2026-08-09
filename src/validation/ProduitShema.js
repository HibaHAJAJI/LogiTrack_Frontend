
import * as yup from "yup";


export const ProduitShema = yup.object({

     nom:yup
     .string()
     .required("Le nom est obligatoire")
     .min(2,"Le nom doit contenir au moins 2 caractères"),

     categorie:yup
     .string()
     .required("La catégorie est obligatoire")
     .min(2, "La catégorie doit contenir au moins 2 caractères"),
     prix:yup
     .number()
     .typeError("Le prix doit être un nombre")
     .positive("Le prix doit être supérieur à 0")
     .required("Le prix est obligatoire"),


     quantiteStock:yup
        .number()
        .typeError("La quantité doit être un nombre")
        .integer("La quantité doit être un nombre entier")
        .min(1, "La quantité doit être supérieure ou égale à 1")
        .required("La quantité est obligatoire"),


});

export default ProduitShema;

