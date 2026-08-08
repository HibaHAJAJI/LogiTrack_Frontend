import ProduitsService from "../services/ProduitsService";
import { useState,useEffect } from "react";




function ProduitsList(){

    const[produits,setProduits]=useState([]);


    const laodingProduit = async ()=>{

        try{
              const data = await ProduitsService.getAll();
              setProduits(data.content ||[]);
        }catch(error){
            console.log(error);
        }      

        }


        useEffect(()=>{

           const fetchProduits= async ()=>{

              await  laodingProduit();
            }
            fetchProduits();
           
        },[])



        return(
              
        <div>
            <h2>Liste des produits</h2>

            {produits.map((produit) => (
                <div key={produit.id}>
                    <p>ID : {produit.id}</p>
                    <p>Nom : {produit.nom}</p>
                    <p>Prix : {produit.prix}</p>
                    <p>Stock : {produit.stock}</p>
                    <hr />
                </div>
            ))}
        </div>
  
        )
        

    }


export default ProduitsList;