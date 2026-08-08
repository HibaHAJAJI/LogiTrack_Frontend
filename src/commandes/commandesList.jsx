import CommandesService from "../services/CommandesService";
import { useEffect,useState } from "react";



function CommandesList(){
    const[commandes,setCommandes]=useState([]);

    const laodingCommandes= async()=>{

        try{
         const data = await CommandesService.getAll();
            setCommandes(data.content ||[]);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        const fetchCommandes = async()=>{
            await laodingCommandes();
        }
        fetchCommandes();
    },[])

    
        return(
              
        <div>
            <h2>Liste des Commandes</h2>

            {commandes.map((commandes) => (
                <div key={commandes.id}>
                    <p>ID Client : {commandes.clientId}</p>
                    <p>Statut : {commandes.statut}</p>
                    <p>Date Commande : {commandes.dateCommande}</p>
                    <hr />
                </div>
            ))}
        </div>
  
        )

}

export default CommandesList;