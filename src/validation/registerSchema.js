import * as yup from "yup";

export const registerSchema =  yup.object({
     nom: yup
    .string()
    .required("Le nom est obligatoire")
    .min(3,"Le nom doit contenir au moins 3 caractères"),

    prenom: yup
    .string()
    .required("Le prénom est obligatoire")
    .min(3,"Le prénom doit contenir au moins 3 caractères"),

    email:yup
    .string()
    .email("Veuillez saisir un email valide")
    .required("L'email est obligatoire"),

    password: yup
    .string()
    .min(6,"Le mot de passe doit contenir au moins 6 caractères")
    .required("Le mot de passe est obligatoire"),


})
