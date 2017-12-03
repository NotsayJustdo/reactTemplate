import { LOGIN, LOGOUT } from '@/redux/variables.js';

// 登录的action
export const login = data => {
    return {
        type: 'LOGIN',
        data
    }
}

export const logout = data => {
    return {
        type: 'LOGOUT'
    }
}
