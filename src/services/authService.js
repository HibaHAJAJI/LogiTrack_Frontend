import api from './axios';

const authService = {
    
    login : async(data)=>{
        const response = await api.post('/auth/login' , data); 
        return response.data
    },

    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },
}

export default authService;