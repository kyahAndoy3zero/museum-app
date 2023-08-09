import { useMutation } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';


const API_URL = "http://127.0.0.1:5000/api/v1/user/"


export const useLoginMutation = () => {

    return useMutation({
        mutationFn: (userData) => {
            console.log(userData)
            return axios.post(API_URL + 'login', userData);
        },
        onSuccess: (data) => {
            toast.success('Log In Successfully!', { position: "top-center" });
            localStorage.setItem('user', JSON.stringify(data.data));
        },
        onError: () => {
            toast.error('Incorrect Email and Password', { position: "top-center" });
        },
    });
}


export const logout = () => {
    localStorage.removeItem('user')
}