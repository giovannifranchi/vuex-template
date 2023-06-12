import Ajax from "./Ajax";


const User = {

    getUsername: (token)=> {
        return Ajax.get('/username', {token});
    },

    getRole: (token)=> {
        return Ajax.get('/role', {token});
    }
}


export default User;