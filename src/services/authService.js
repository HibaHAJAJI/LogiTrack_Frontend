import api from './axios';

const authService = {
    login : async(email , password)=>{
        const response = await api.post('/auth/login' , { email, password }); 


        if(response.data && response.data.token){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user || { email }));
        }
        return response.data
    }
}

export default authService;