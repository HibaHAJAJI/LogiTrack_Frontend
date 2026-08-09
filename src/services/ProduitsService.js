import api from "./axios";


const ProduitsService = {

    getAll : async(page=0,size=6)=>{
        const response = await api.get(`/products?page=${page}&size=${size}`);
        return response.data;
    },

    create : async(procuts)=>{
        const response = await api.get("/products",procuts);
        return response.data
    }

}

export default ProduitsService;