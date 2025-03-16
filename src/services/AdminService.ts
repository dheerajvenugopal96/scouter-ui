import { SignUpProps } from "../model/ScouterModels";

export const getUserDetails = () => {
    return Promise.resolve({userName:'Dheeraj'});
}

export const saveUserDetails = (data: SignUpProps) => {

    sessionStorage.setItem('loggedUser',JSON.stringify(data));
    sessionStorage.setItem('isLoggedIn','true');
    return Promise.resolve({status: '200'});
}

export const login = (data: SignUpProps) => {
    if(sessionStorage.getItem('loggedUser')){
        sessionStorage.setItem('isLoggedIn','true');
        return {status: '200'};
    }else{
        throw new Error('Invalid Credentials');
    }
}