import Cookies from 'js-cookie';
import { LOGIN, LOGOUT } from '@/redux/variables.js';
export const user = (state={}, action={}) => {
    switch(action.type) {
        case LOGIN:
            Cookies.set('Admin-Token', action.data.username);
            Cookies.set('username', action.data.username);
            return action.data;
        case LOGOUT:
            console.log('haha');
            Cookies.set('Admin-Token', ''); 
            Cookies.set('username', '');
            return {
                password: ''
            }
        default:
            return {
                username: '',
                password: ''
            };
    }
}