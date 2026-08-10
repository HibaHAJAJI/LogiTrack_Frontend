import api from "./axios";


const ProduitsService = {

    getAll : async(page=0,size=6)=>{
        const response = await api.get(`/products?page=${page}&size=${size}`);
        return response.data;
    },

    create : async(procuts)=>{
        const response = await api.get("/products",procuts);
        return response.data
    },

    getByCategory: async (categorie, page = 0, size = 10) => {
    const response = await api.get(
        `/products/category/${categorie}?page=${page}&size=${size}` );
    return response.data;
    },

    getByPrice: async (prix, page=0,size=10)=>{
       const response = await api.get(
        `/products/price/${prix}?page=${page}&size=${size}` );
        return response.data;
    },

    delete: async(id)=>{
        const response = await api.delete(`/products/${id}`)
        return response.data;
    }, 
    getById: async(id)=>{
        const response = await api.get(`/products/${id}`);
        return response.data
    }


}

export default ProduitsService;