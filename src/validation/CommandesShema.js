
import * as yup from "yup";


export const CommandesShema=yup.object({

 dateCommande: yup
        .date()
        .required("La date de commande est obligatoire"),

    statut: yup
        .string()
        .required("Le statut est obligatoire")
        .oneOf(
            ["EN_ATTENTE", "EXPEDIEE", "LIVREE"],
            "Statut invalide"
        ),

    clientId: yup
        .number()
        .typeError("L'ID client doit être un nombre")
        .required("Le client est obligatoire")
        .positive("L'ID client doit être positif")
        .integer("L'ID client doit être un nombre entier"),
});

export default CommandesShema;