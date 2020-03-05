import userProvider from '@data-access/user-provider';
import { ToastContainer, toast } from 'react-toastify';

export function logout(){
    return {
        type:'LOGOUT'
    }
}

function saveCurrentUser(user){
    return {
        type:'SAVE-CURRENT-USER',
        user
    }
}

