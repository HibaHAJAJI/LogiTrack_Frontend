import * as yup from "yup";

export const ClientSchema = yup.object({
    nom:yup
    .string()
    .required("Le nom est obligatoire")
    .min(3,"Le nom doit contenir au moins 3 caractères"),

    email:yup
    .string()
    .email("Veuillez saisir un email valide")
    .required("L'email est obligatoire"),

    telephone:yup
    .string()
    .required("Le telephone est obligatoire")
    .min(10,"Le telephone doit contenir au moins 10 caractères"),

    ville:yup
    .string()
    .required("Le ville est obligatoire")

});
export default ClientSchema;
