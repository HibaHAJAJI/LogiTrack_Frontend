import {Button} from "@mui/material"


function DeleteButton({ onDelete, text = "Supprimer"}){

    const handleDelete = async()=>{
        const confirmed = window.confirm(
            "Êtes-vous sûr de vouloir supprimer cet élément ?"
        );

        if(!confirmed){
            return;
        }

        try{
            await onDelete();
        }catch(error){
            console.error("Erreur lors de la suppression :",error)
        }
    };

    return (
          <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
                >
                {text}
            </Button>
    );
}

export default DeleteButton;