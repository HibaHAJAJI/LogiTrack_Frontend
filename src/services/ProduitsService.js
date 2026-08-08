import api from "./axios";


const ProduitsService = {

    getAll : async(page=0,size=6)=>{
        const response = await api.get(`/products?page=${page}&size=${size}`);
        return response.data;
    }

}

export default ProduitsService;