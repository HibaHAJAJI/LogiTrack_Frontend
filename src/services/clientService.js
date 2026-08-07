import api from "./axios";



const clientService ={

    getAll : async(page=0, size=10)=>{

        const response = await api.get(`/clients?page=${page}&size=${size}`);
        return response.data;
    },

    create: async(client)=>{
        const response = await api.post("/clients",client);
        return response.data;
    }

}
export default clientService;
