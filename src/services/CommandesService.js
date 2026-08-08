import api from "./axios";



const CommandesService ={

    getAll: async(page=0,size=10)=>{
        const response = await api.get(`/orders?page=${page}&size=${size}`);
       return response.data
    },

}

export default CommandesService;